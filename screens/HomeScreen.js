import React, { useState, useLayoutEffect, useEffect, useContext } from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    ScrollView,
    TouchableOpacity
} from "react-native";
import Colors from "../constants/Colors";
import MyTabs from "../components/MyTabs";
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector } from "react-redux";

const HomeScreen = ({ navigation }) => {
    const globalFilters = useSelector(state => state.filters);
    console.log('these are the filters in the homescreen', globalFilters);
    useLayoutEffect(() => {
        navigation.setOptions(
            {
                headerRight: () => (
                    <TouchableOpacity
                        style={{ marginRight: 20 }}
                        onPress={() => { navigation.navigate("Filters") }}
                    >
                        <MaterialIcons name="filter-list" size={24} color="black" />
                    </TouchableOpacity>
                )
            }
        )
    }, [navigation]);
    return (
        <MyTabs />
    );
};

const styles = StyleSheet.create({
    // category: {
    //     backgroundColor: Colors.extraColor + "66",
    //     padding: 15,
    //     marginVertical: 0,
    //     marginHorizontal: 0,
    //     borderColor: "black",
    //     borderRadius: 2,
    //     borderWidth: 1,
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "100%",
    // },
    // categoryTitle: {
    //     fontSize: 22,
    //     color: Colors.white,
    //     backgroundColor: "#00000099",
    //     padding: 5,
    // },
    // image: {
    //     flex: 1,
    //     width: "100%",
    //     height: 200,
    // },
});

export default HomeScreen;
