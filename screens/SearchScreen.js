import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Colors from '../constants/Colors';

const SearchScreen = ({ navigation }) => {
    const [searchQuery, setsearchQuery] = useState('');

    const onPressHandler = (searchQuery) => {
        navigation.navigate("Search Results", { searchQuery });
    };
    return (
        <View style={styles.screen}>
            <Searchbar
                placeholder="Search"
                onChangeText={query => setsearchQuery(query)}
                value={searchQuery}
                onIconPress={() => onPressHandler(searchQuery)}
            />
            <View style={styles.button}>
                <Button style={styles.button} title="Find Recipes" onPress={() => onPressHandler(searchQuery)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    button: {
        marginTop: 10
    }
})

export default SearchScreen;