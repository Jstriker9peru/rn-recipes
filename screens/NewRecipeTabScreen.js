import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import useFetch from "../hooks/useFetch";
import Colors from "../constants/Colors";
import { recipeData } from "./data";"react-native-gesture-handler";
import IngredientDetails from "../components/IngredientDetails";
import InstructionDetails from "../components/InstructionDetails";
import MoreDetails from "../components/OverviewDetails";
import MyTabs from "../components/MyTabs";

const NewRecipeTabScreen = ({ route }) => {

    return (
        <View style={styles.screen}>
            {recipeData && (
                <View style={styles.imageContainer}>
                    <Image
                        resizeMode="stretch"
                        source={{ uri: recipeData.image }}
                        style={styles.image}
                    ></Image>
                    <View style={styles.imageCover}>
                        <Text style={styles.recipeTitle}>
                            {recipeData.title}
                        </Text>
                    </View>
                </View>
            )}
            <View style={styles.infoContainer}>
                <View style={{ ...styles.row, ...styles.quick }}>
                    <View style={styles.quickItem}>
                        <FontAwesome5 style={styles.icon} name="stopwatch" />
                        <Text>{recipeData.readyInMinutes} min(s)</Text>
                    </View>
                    <View style={styles.quickItem}>
                        <FontAwesome5 style={styles.icon} name="user" />
                        <Text>{recipeData.servings} Serving(s)</Text>
                    </View>
                    <View style={styles.quickItem}>
                        <FontAwesome5 style={styles.icon} name="tint" />
                        <Text>
                            {Math.round(
                                recipeData.nutrition.nutrients[0].amount
                            )}{" "}
                            Calories
                        </Text>
                    </View>
                </View>
            </View>
            <MyTabs recipeData={recipeData} />
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
    imageContainer: {
        width: "100%",
        height: "40%",
        backgroundColor: "brown",
    },
    image: {
        // flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "red",
    },
    imageCover: {
        // backgroundColor: Colors.extraColor + "66",
        // backgroundColor: 'orange',
        padding: 15,
        marginVertical: 0,
        marginHorizontal: 0,
        borderColor: "black",
        borderRadius: 2,
        borderWidth: 1,
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
    recipeTitle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 22,
        color: Colors.white,
        backgroundColor: "#000000CC",
        padding: 5,
    },
    infoContainer: {
        display: "flex",
        paddingTop: 30,
        // justifyContent: 'center',
        alignItems: "center",
        // flex: 1,
        width: "100%",
        backgroundColor: "white",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        position: "absolute",
        height: "65%",
        zIndex: 2,
        bottom: 0,
    },
    row: {
        width: "90%",
        height: "auto",
        // backgroundColor: "purple",
        display: "flex",
        // color: 'yellow'
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
        marginTop: 30,
    },
    tab: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    tabName: {
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

export default NewRecipeTabScreen;
