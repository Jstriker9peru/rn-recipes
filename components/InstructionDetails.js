import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from "react-native";
import Colors from "../constants/Colors";

const InstructionDetails = ({ data }) => {
    return (
        <ScrollView style={{ width: "80%", marginTop: 15 }}>
            {data ?
                data.map(({ number, step }, index) => (
                    <View key={index} style={styles.instructions}>
                        <Text style={{ ...styles.text, ...styles.color }}>
                            {number}.{" "}
                        </Text>
                        <Text style={styles.text}>{step}</Text>
                    </View>
                )) : (
                    <View style={styles.instructions}>
                        <Text>There were no instructions found.</Text>
                    </View>
                )}
        </ScrollView>
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
        paddingRight: 30
    },
    loading: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontFamily: 'barlow-light',
        fontSize: 14,
    },
    color: {
        color: "orange",
        marginRight: 2,
    },
});

export default InstructionDetails;
