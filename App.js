import "react-native-gesture-handler";
import React, { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "./constants/Colors";

import RecipeScreen from "./screens/RecipeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import FiltersScreen from "./screens/FiltersScreen";
import NewRecipeTabScreen from "./screens/NewRecipeTabScreen";

import { AppLoading } from "expo";
import { useFonts } from '@use-expo/font';

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { filtersReducer } from "./store/reducers/filters-reducer";

const rootReducer = combineReducers({
    filters: filtersReducer,
});

const store = createStore(rootReducer);


const appFonts = {
  "barlow-light": require("./assets/fonts/BarlowSemiCondensed-Light.ttf"),
  "barlow-medium": require("./assets/fonts/BarlowSemiCondensed-Medium.ttf"),
  "cantarell": require("./assets/fonts/Cantarell-Regular.ttf"),
  "cantarell-bold": require("./assets/fonts/Cantarell-Bold.ttf"),
  "sarala": require("./assets/fonts/Sarala-Regular.ttf"),
  "sarala-bold": require("./assets/fonts/Sarala-Bold.ttf"),
}

const Stack = createStackNavigator();

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Colors.white
    },
    headerTitleStyle: {
        color: Colors.black,
    },
    headerTitleAlign: 'center'
};

export default function App() {
    const [isLoaded] = useFonts(appFonts);
    
    if (!isLoaded) {
      return <AppLoading />;
    }

    return (
        <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={defaultStackNavOptions}>
                        {/* <Stack.Screen name="Recipe" component={NewRecipeTabScreen} /> */}
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Filters" component={FiltersScreen} />
                        <Stack.Screen
                            name="Category"
                            component={CategoryScreen}
                            options={({ route }) => ({ title: route.params.title })}
                        />
                        <Stack.Screen name="Recipe" component={RecipeScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
