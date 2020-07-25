import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Colors from "../constants/Colors";

const InstructionDetails = ({ data }) => {
    return (
        <View style={{ width: "100%", height: "auto" }}>
            {data ? (
                data.map(({ number, step }, index) => (
                    <View key={index} style={styles.instructions}>
                        <Text style={{ ...styles.text, ...styles.color }}>
                            {number}.{" "}
                        </Text>
                        <Text style={styles.text}>{step}</Text>
                    </View>
                ))
            ) : (
                <View style={styles.instructions}>
                    <Text>There were no instructions found.</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    instructions: {
        justifyContent: "flex-start",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        marginVertical: 12,
        width: "100%",
        paddingLeft: 10,
        paddingRight: 30,
    },
    loading: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontFamily: "barlow-light",
        fontSize: 18,
        // lineHeight: 20
    },
    color: {
        color: "orange",
        marginRight: 2,
    },
});

export default InstructionDetails;
