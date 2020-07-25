import React, { useState, useEffect, useCallback } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator,
} from "react-native";
import RecipeListItem from "../components/RecipeListItem";
import useFetch from "../hooks/useFetch";
import Colors from "../constants/Colors";
import { useSelector } from "react-redux";

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

const SearchResultsScreen = ({ route, navigation }) => {
    const { searchQuery } = route.params;
    const globalFilters = useSelector(state => state.filters);

    const typeParam = route.params.type || globalFilters.category[0] || '';
    const dietParam = route.params.diet || globalFilters.diet[0] || '';
    const intoleranceParam = globalFilters.diet[0] || '';
    const cuisineParam = route.params.cuisine || globalFilters.cuisine.join(',') || '';
    const sortParam = route.params.sort || '';

    console.log(`These are the params: 
        typeParam --- ${typeParam},
        dietParam --- ${dietParam},
        intoleranceParam --- ${intoleranceParam},
        cuisineParam --- ${cuisineParam},
        sortParam --- ${sortParam}
    `);

    const [fetchNumber, setFetchNumber] = useState(10);
    const [initialLoad, setInitialLoad] = useState(false);
    const [urlString, setUrlString] = useState(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&type=${typeParam}&diet=${dietParam}&cuisine=${cuisineParam}&intolerances=${intoleranceParam}&number=${fetchNumber}&sort=${sortParam}&instructionsRequired=true&apiKey=d70dd48fb9594c368441a541932d65b1`
    );
    
    const [response, loading, hasError] = useFetch(urlString, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    useEffect(() => {
        setUrlString(
            `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&type=${typeParam}&diet=${dietParam}&cuisine=${cuisineParam}&intolerances=${intoleranceParam}&number=${fetchNumber}&sort=${sortParam}&instructionsRequired=true&apiKey=d70dd48fb9594c368441a541932d65b1`
        );
    }, [fetchNumber]);

    const fetchMoreHandler = () => {
        setInitialLoad(true);
        setFetchNumber(fetchNumber + 10);
    };

    if (loading && !initialLoad) {
        return (
            <View style={styles.screen}>
                <ActivityIndicator size="large" color={Colors.secondaryColor} />
            </View>
        );
    }

    return (
        <View style={styles.screen}>
            {(response && response.results) ? (
                <FlatList
                    style={styles.flatlist}
                    data={response.results}
                    keyExtractor={(item) => item.id}
                    numColumns={1}
                    renderItem={(item) => (
                        <RecipeListItem
                            navigation={navigation}
                            recipe={item.item}
                        />
                    )}
                    onEndReached={fetchMoreHandler}
                    onEndReachedThreshold={0.05}
                />
            ) : (
                <View>
                    <Text>No recipes were found!</Text>
                </View>
            )}
            {(initialLoad && loading) && (
                <View style={styles.bottomLoading}>
                    <ActivityIndicator size="large" color={Colors.secondaryColor} />
                </View>

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
        backgroundColor: Colors.white,
        paddingVertical: 5
    },
    listContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    bottomLoading: {
        paddingVertical: 5,
        display: 'flex',
        backgroundColor: '#333',
        width: '100%'
    },
    flatlist: {
        backgroundColor: 'rgb(254, 254, 254)',
        width: "100%",
        paddingHorizontal: 10
    }
});

export default SearchResultsScreen;
