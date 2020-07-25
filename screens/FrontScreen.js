import React, { useState, useEffect, useCallback } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    Button,
    ActivityIndicator,
} from "react-native";
import Colors from "../constants/Colors";
import CustomRow from "../components/CustomRow";
import RecipeListItem from "../components/RecipeListItem";
import { TouchableOpacity } from "react-native-gesture-handler";
import { categories, cuisines, diets } from "../data/data";
import CustomListRow from "../components/CustomListRow";

const FrontScreen = ({ navigation }) => {
    const [popularData, setPopularData] = useState();
    const [categoryData, setCategoryData] = useState();
    const [cuisineData, setCuisineData] = useState();
    const [dietData, setDietData] = useState();
    const [chosenCategory, setChosenCategory] = useState({ title: "" });
    const [chosenCuisine, setChosenCuisine] = useState({ title: "" });
    const [chosenDiet, setChosenDiet] = useState({ title: "" });

    const getData = useCallback(async () => {
        const category =
            categories[Math.floor(Math.random() * categories.length)];
        setChosenCategory(category);
        const cuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
        setChosenCuisine(cuisine);
        const diet = diets[Math.floor(Math.random() * diets.length)];
        setChosenDiet(diet);

        const urls = [
            `https://api.spoonacular.com/recipes/complexSearch?sort=random&instructionsRequired=true&number=${5}&apiKey=d70dd48fb9594c368441a541932d65b1`,
            `https://api.spoonacular.com/recipes/complexSearch?type=${
                category.param
            }&number=${5}&instructionsRequired=true&apiKey=d70dd48fb9594c368441a541932d65b1`,
            `https://api.spoonacular.com/recipes/complexSearch?cuisine=${
                cuisine.param
            }&number=${5}&instructionsRequired=true&apiKey=d70dd48fb9594c368441a541932d65b1`,
            `https://api.spoonacular.com/recipes/complexSearch?diet=${
                diet.param
            }&instructionsRequired=true&number=${5}&apiKey=d70dd48fb9594c368441a541932d65b1`,
        ];

        await Promise.all([
            fetch(urls[0])
                .then((res) => res.json())
                .then((res) => setPopularData(res))
                .catch((err) => console.log("first err", err)),
            fetch(urls[1])
                .then((res) => res.json())
                .then((res) => setCategoryData(res))
                .catch((err) => console.log("second err", err)),
            fetch(urls[2])
                .then((res) => res.json())
                .then((res) => setCuisineData(res))
                .catch((err) => console.log("third error", err)),
            fetch(urls[3])
                .then((res) => res.json())
                .then((res) => setDietData(res))
                .catch((err) => console.log("fourth error", err)),
        ]);
    }, [fetch]);

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <View style={styles.screen}>
            <ScrollView style={{ width: "100%", paddingHorizontal: 20 }}>
                <Text style={styles.headerText}>
                    Check Out Some Amazing Recipes!
                </Text>
                <Image
                    source={require("../assets/images/front-page-image.jpg")}
                    style={{ width: "100%", height: 400 }}
                />
                <CustomRow itemDisplay="column">
                    <Text style={styles.categoryText}>Popular</Text>
                    <CustomListRow
                        recipes={popularData}
                        buttonTitle="Popular"
                        param="random"
                        paramType="sort"
                    />
                </CustomRow>

                <CustomRow itemDisplay="column">
                    <Text style={styles.categoryText}>{chosenDiet.title}</Text>
                    <CustomListRow
                        recipes={dietData}
                        buttonTitle={chosenDiet.title}
                        param={chosenDiet.param}
                        paramType="diet"
                    />
                </CustomRow>

                <CustomRow itemDisplay="column">
                    <Text style={styles.categoryText}>
                        {chosenCategory.title}
                    </Text>
                    {(categoryData && categoryData.results) ? (
                        categoryData.results.map((categoryRecipe, index) => (
                            <RecipeListItem
                                key={index}
                                recipe={categoryRecipe}
                            />
                        ))
                    ) : (
                        <View>
                            <ActivityIndicator size="small" />
                        </View>
                    )}
                    <CustomRow
                        extraStyles={{
                            paddingHorizontal: 0,
                            marginHorizontal: 0,
                        }}
                        itemDisplay="column"
                    >
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("Search Results", {
                                    searchQuery: "",
                                    type: chosenCategory.param,
                                })
                            }
                        >
                            <Button
                                title={`View all ${chosenCategory.title || ""}`}
                                color="black"
                            />
                        </TouchableOpacity>
                    </CustomRow>
                </CustomRow>
                <CustomRow itemDisplay="column">
                    <Text style={styles.categoryText}>
                        {chosenCuisine.title}
                    </Text>
                    {(cuisineData && cuisineData.results) ? (
                        cuisineData.results.map((cuisineRecipe, index) => (
                            <RecipeListItem
                                key={index}
                                recipe={cuisineRecipe}
                            />
                        ))
                    ) : (
                        <View>
                            <ActivityIndicator size="small" />
                        </View>
                    )}
                    <CustomRow
                        extraStyles={{
                            paddingHorizontal: 0,
                            marginHorizontal: 0,
                        }}
                        itemDisplay="column"
                    >
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("Search Results", {
                                    searchQuery: "",
                                    cuisine: chosenCuisine.param,
                                })
                            }
                        >
                            <Button
                                title={`View all ${chosenCuisine.title || ""}`}
                                color="black"
                            />
                        </TouchableOpacity>
                    </CustomRow>
                </CustomRow>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.white,
    },
    headerText: {
        backgroundColor: "black",
        color: Colors.white,
        padding: 10,
        marginVertical: 20,
        marginHorizontal: 40,
        fontSize: 26,
        fontFamily: "sarala",
    },
    categoryText: {
        fontSize: 18,
        fontFamily: "sarala-bold",
    },
    listRowButton: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: 10,
        paddingTop: 10,
    },
});

export default FrontScreen;
