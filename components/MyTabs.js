import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FontAwesome, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import SearchScreen from "../screens/SearchScreen";
import CuisineScreen from "../screens/CuisineScreen";
import MealTypeScreen from "../screens/MealTypeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FiltersScreen from "../screens/FiltersScreen";

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator>
            {/* <Tab.Screen
                name="Meal Type"
                component={MealTypeScreen}
                options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons
                            name="food-fork-drink"
                            size={20}
                            color="black"
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Cuisines"
                component={CuisineScreen}
                options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons
                            name="food-variant"
                            size={20}
                            color="black"
                        />
                    ),
                }}
            /> */}
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="search" size={20} color="black" />
                    )
                }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="user" size={20} color="black" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
});

export default MyTabs;
