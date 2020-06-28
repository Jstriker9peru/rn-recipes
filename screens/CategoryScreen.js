import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import RecipeListItem from "../components/RecipeListItem";
import useFetch from "../hooks/useFetch";
import Colors from "../constants/Colors";

const recipes = [
    {
        id: 955591,
        image: "https://spoonacular.com/recipeImages/955591-312x231.jpg",
        imageType: "jpg",
        title: "Baby Kale Breakfast Salad with Quinoa & Strawberries",
    },
    {
        id: 557456,
        image: "https://spoonacular.com/recipeImages/557456-312x231.jpg",
        imageType: "jpg",
        title: "Oatmeal Berry Breakfast Cake ",
    },
    {
        id: 500461,
        image: "https://spoonacular.com/recipeImages/500461-312x231.jpg",
        imageType: "jpg",
        title: "Creamy Chocolate Breakfast Shake",
    },
    {
        id: 607078,
        image: "https://spoonacular.com/recipeImages/607078-312x231.jpg",
        imageType: "jpg",
        title: "Strawberry Infused Quinoa Breakfast Bowl",
    },
    {
        id: 474360,
        image: "https://spoonacular.com/recipeImages/474360-312x231.jpg",
        imageType: "jpg",
        title:
            "Easy Breakfast Bruschetta with Tomato and Avocado – Nigella Lawson – 50 Women Game Changers In Food",
    },
    {
        id: 505103,
        image: "https://spoonacular.com/recipeImages/505103-312x231.jpg",
        imageType: "jpg",
        title: "Strawberry & Peach Quinoa Breakfast",
    },
    {
        id: 495020,
        image: "https://spoonacular.com/recipeImages/495020-312x231.jpg",
        imageType: "jpg",
        title: "Pumpkin Spice Breakfast Shake",
    },
    {
        id: 916852,
        image: "https://spoonacular.com/recipeImages/916852-312x231.jpg",
        imageType: "jpg",
        title: "Strawberry Infused Quinoa Breakfast Bowl",
    },
    {
        id: 694990,
        image: "https://spoonacular.com/recipeImages/694990-312x231.jpg",
        imageType: "jpg",
        title: "Quick Breakfast Taco",
    },
    {
        id: 850397,
        image: "https://spoonacular.com/recipeImages/850397-312x231.jpg",
        imageType: "jpg",
        title: "Plant Protein Power Breakfast Bowls",
    },
];

const CategoryScreen = ({ route, navigation }) => {
    // const [loadedRecipes, setloadedRecipes] = useState(recipes);
    const { type } = route.params;
    const [ response, loading, hasError ] = useFetch(
        `https://api.spoonacular.com/recipes/complexSearch?type=${type}&apiKey=d70dd48fb9594c368441a541932d65b1`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    // const fetchRecipes = useCallback(() => {
    //     fetch(
    //         `https://api.spoonacular.com/recipes/complexSearch?type=${type}&apiKey=d70dd48fb9594c368441a541932d65b1`,
    //         {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         }
    //     )
    //         .then((data) => {
    //             // console.log('Data', data);
    //             return data.json();
    //         })
    //         .then((results) => {
    //             // console.log("There are the results of this.", results);
    //             setloadedRecipes(results.results);
    //         })
    //         .catch((err) => console.log("This is the error", err));
    // }, [type]);

    // useEffect(() => {
    //     fetchRecipes();
    // }, [fetchRecipes]);
    if (loading) {
        return (
        <View style={styles.screen}>
            <ActivityIndicator size="large" color={Colors.secondaryColor} />
        </View>
        )
    }

    return (
        <View style={styles.screen}>
            {response && (
                <FlatList
                    data={response.results}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    columnWrapperStyle={styles.list}
                    renderItem={(item) => <RecipeListItem navigation={navigation} recipe={item.item} />}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    listContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CategoryScreen;
