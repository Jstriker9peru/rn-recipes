import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from "react-native";
// import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";

const HomeScreen = ({ navigation }) => {
    const [categories, setCategories] = useState([
        { title: "Breakfast", image: require("../assets/breakfast-image.jpg") },
        { title: "Main", image: require("../assets/main-dish-image.jpeg") },
        { title: "Sides", image: require("../assets/sides-image.jpg") },
        { title: "Desserts", image: require("../assets/dessert-image.jpg") }
    ]);

    const selectHandler = () => {
        navigation.navigate('Category')
    }
    return (
        <View style={{ flex: 1, width: '100%' }}>
            <ScrollView style={{ flex: 1, width: '100%' }}>
                {categories.map((category, index) => (
                    <TouchableOpacity key={index} onPress={selectHandler}>
                            <ImageBackground
                                source={category.image}
                                style={styles.image}
                                >
                                <View style={styles.category}>
                                    <Text style={styles.categoryTitle}>
                                        {category.title}
                                    </Text>
                                </View>
                            </ImageBackground>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    category: {
        backgroundColor: Colors.extraColor + "66",
        padding: 15,
        marginVertical: 0,
        marginHorizontal: 0,
        borderColor: "black",
        borderRadius: 2,
        borderWidth: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: '100%'
    },
    categoryTitle: {
        fontSize: 22,
        color: Colors.white,
        backgroundColor: '#00000099',
        padding: 5
    },
    image: {
        flex: 1,
        width: '100%',
        height: 200,
        // padding: 15,
        // backgroundColor: "#000000CC",
    }
});

export default HomeScreen;
