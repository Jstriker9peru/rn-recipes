import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ActivityIndicator,
    ScrollView
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import useFetch from "../hooks/useFetch";
import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import IngredientDetails from "../components/IngredientDetails";
import InstructionDetails from "../components/InstructionDetails";
import OverviewDetails from "../components/OverviewDetails";
import CustomRow from "../components/CustomRow";
import RecipeThumbnail from "../components/RecipeThumbnail";

const RecipeScreen2 = ({ route }) => {
    const { recipeId } = route.params;

    const [ response, loading, hasError ] = useFetch(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=d70dd48fb9594c368441a541932d65b1`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const tabInfo = response ? {
        Ingredients: response.extendedIngredients,
        Instructions: response.analyzedInstructions[0].steps,
        Overview: {
            title: response.title,
            source: response.sourceName,
            caloricBreakdown: response.nutrition.caloricBreakdown,
            prepTime: response.preparationMinutes,
            cookTime: response.cookingMinutes
        },
    } : { };

    const [selectedTab, setSelectedTab] = useState("Overview");
    const [tabData, setTabData] = useState();

    useEffect(() => {
        if (response) {
            tabHandler(selectedTab);
        }
    }, [response])

    const tabHandler = (tabName) => {
        console.log("This is the tabName", tabName);
        setSelectedTab(tabName);
        setTabData(tabInfo[tabName]);
        console.log("Hello there");
    };

    if (loading) {
        return (
        <View style={styles.loadingScreen}>
            <ActivityIndicator size="large" color={Colors.secondaryColor} />
        </View>
        )
    }

    let tabContent;
    if (selectedTab === "Ingredients") {
        tabContent = <IngredientDetails data={tabData} />;
    } else if (selectedTab === "Instructions") {
        tabContent = <InstructionDetails data={tabData} />;
    } else if (selectedTab === "Overview") {
        tabContent = <OverviewDetails data={tabData} />;
    }

    return (
        <View style={styles.screen}>
            <ScrollView style={{ width: "100%" }}>
                {response && (
                    // <RecipeThumbnail size="large" />
                    <View style={styles.imageContainer}>
                        <Image
                            resizeMode="cover"
                            source={{ uri: response.image }}
                            style={styles.image}
                        ></Image>
                    </View>
                )}
                {response && (
                <View style={styles.infoContainer}>
                    <View style={styles.titleRow}>
                        <Text style={styles.titleText}>{response.title}</Text>
                    </View>
                    <View style={{ ...styles.row, ...styles.quick }}>
                        <View style={styles.quickItem}>
                            <FontAwesome5 style={styles.icon} name="stopwatch" />
                            <Text>{response.readyInMinutes} min(s)</Text>
                        </View>
                        <View style={styles.quickItem}>
                            <FontAwesome5 style={styles.icon} name="user" />
                            <Text>{response.servings} Serving(s)</Text>
                        </View>
                        <View style={styles.quickItem}>
                            <FontAwesome5 style={styles.icon} name="tint" />
                            <Text>
                                {Math.round(
                                    response.nutrition.nutrients[0].amount
                                )}{" "}
                                Calories
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: "100%", height: "auto" }}>
                        <CustomRow itemDisplay="column">
                            <Text style={styles.tabName}>Overview</Text>
                            <OverviewDetails data={tabInfo.Overview} />
                        </CustomRow>
                        <CustomRow itemDisplay="column">
                            <Text style={styles.tabName} >Ingredients</Text>
                            <IngredientDetails data={tabInfo.Ingredients} />
                        </CustomRow>
                        <CustomRow itemDisplay="column">
                            <Text style={styles.tabName}>Instructions</Text>
                            <InstructionDetails data={tabInfo.Instructions} />
                        </CustomRow>
                    </View>
                    
                </View>)}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        // height: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        // backgroundColor: "orange"
    },
    loadingScreen: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        width: "100%",
        height: 200,
        padding: 30,
        backgroundColor: Colors.white
        // backgroundColor: "#00000099",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 15
    },
    infoContainer: {
        display: "flex",
        paddingTop: 15,
        alignItems: "center",
        width: "100%",
        paddingBottom: 15,
        height: "auto",
        backgroundColor: Colors.white
    },
    titleRow: {
        width: "80%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        // backgroundColor: Colors.white
    },
    titleText: {
        fontFamily: 'sarala-bold',
        fontSize: 20,
        textAlign: "center",
        textTransform: 'capitalize'
    },
    row: {
        width: "90%",
        height: "auto",
        display: "flex",
    },
    quick: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    quickItem: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        color: "orange",
        marginRight: 5,
        fontSize: 15,
    },
    tabs: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 15,
    },
    tab: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    tabName: {
        fontFamily: 'sarala',
        fontSize: 17,
    },
    underlined: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "orange",
        borderBottomWidth: 2,
    },
});

export default RecipeScreen2;
