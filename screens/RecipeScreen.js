import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ActivityIndicator,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import useFetch from "../hooks/useFetch";
import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import IngredientDetails from "../components/IngredientDetails";
import InstructionDetails from "../components/InstructionDetails";
import OverviewDetails from "../components/OverviewDetails";

const RecipeScreen = ({ route }) => {
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
            {response && (
                <View style={styles.imageContainer}>
                    <Image
                        resizeMode="stretch"
                        source={{ uri: response.image }}
                        style={styles.image}
                    ></Image>
                </View>)}
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
                <View style={{ ...styles.row, ...styles.tabs }}>
                    <TouchableOpacity
                        onPress={() => tabHandler("Overview")}
                    >
                        <View
                            style={
                                selectedTab === "Overview"
                                    ? styles.underlined
                                    : styles.tab
                            }
                        >
                            <Text style={styles.tabName}>Overview</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => tabHandler("Ingredients")}
                    >
                        <View
                            style={
                                selectedTab === "Ingredients"
                                    ? styles.underlined
                                    : styles.tab
                            }
                        >
                            <Text style={styles.tabName}>Ingredients</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => tabHandler("Instructions")}
                    >
                        <View
                            style={
                                selectedTab === "Instructions"
                                    ? styles.underlined
                                    : styles.tab
                            }
                        >
                            <Text style={styles.tabName}>Instructions</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {tabContent ? (
                    tabContent
                ) : (
                    <View style={{}}>
                        <ActivityIndicator
                            size="large"
                            color={Colors.secondaryColor}
                        />
                    </View>
                )}
            </View>)}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        height: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
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
        height: "40%",
        backgroundColor: "#00000099",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    infoContainer: {
        display: "flex",
        paddingTop: 15,
        alignItems: "center",
        width: "100%",
        backgroundColor: "white",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        position: "absolute",
        height: "66%",
        zIndex: 2,
        bottom: 0,
        paddingBottom: 15
    },
    titleRow: {
        width: "80%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    titleText: {
        fontFamily: 'sarala-bold',
        fontSize: 18,
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

export default RecipeScreen;
