import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Colors from "../constants/Colors";

const IngredientDetails = ({ data }) => {
    return (
        <View>
            {data ?
                data.map(({ original }, index) => (
                    <View key={index} style={styles.ingredients}>
                        <View style={styles.circle}></View>
                        <Text style={{ ...styles.capitalize, ...styles.text }}>
                            {original}
                        </Text>
                    </View>
                )) : (
                    <View style={styles.ingredients}>
                        <Text>There were no ingredients found.</Text>
                    </View>
                )}
        </View>
    );
};

const styles = StyleSheet.create({
    ingredients: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginVertical: 8,
        paddingLeft: 10,
        paddingRight: 30,
        width: "100%",
    },
    circle: {
        marginTop: 6,
        width: 10,
        height: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "orange",
        marginRight: 10,
    },
    loading: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    capitalize: {
        textTransform: "capitalize",
    },
    text: {
        fontFamily: 'barlow-light',
        fontSize: 18,
        marginRight: 5,
    },
});

export default IngredientDetails;
