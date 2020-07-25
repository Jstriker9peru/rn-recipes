import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from "react-native";
import Colors from "../constants/Colors";

const OverviewDetails = ({ data }) => {
    const { title, prepTime, cookTime, source, caloricBreakdown } = data;
    console.log('this is title', title);
    return (
            <View style={styles.moreContainer}>
                <View style={styles.titleRow}>
                    <Text style={styles.text}>
                        <Text style={styles.color}>Name: </Text>
                        {title || 'N/A'}
                    </Text>
                </View>
                <View style={styles.textRow}>
                    <Text style={{ ...styles.text, ...styles.color }}>Prep Time: </Text>
                    <Text style={styles.text}>{prepTime || 'N/A '} min(s)</Text>
                </View>
                <View style={styles.textRow}>
                    <Text style={{ ...styles.text, ...styles.color }}>Cook Time: </Text>
                    <Text style={styles.text}>{cookTime || 'N/A '} min(s)</Text>
                </View>
                <View style={styles.textRow}>
                    <Text style={{ ...styles.text, ...styles.color }}>Source: </Text>
                    <Text style={styles.text}>{source || 'N/A'}</Text>
                </View>
                <View style={styles.textRow}>
                    <Text style={{ ...styles.text, ...styles.color }}>Protein: </Text>
                    <Text style={styles.text}>{caloricBreakdown.percentProtein || 'N/A '}%</Text>
                </View>
                <View style={styles.textRow}>
                    <Text style={{ ...styles.text, ...styles.color }}>Carbs: </Text>
                    <Text style={styles.text}>{caloricBreakdown.percentCarbs || 'N/A '}%</Text>
                </View>
                <View style={styles.textRow}>
                    <Text style={{ ...styles.text, ...styles.color }}>Fat: </Text>
                    <Text style={styles.text}>{caloricBreakdown.percentFat || 'N/A '}%</Text>
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    moreContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
        marginTop: 15,
        paddingLeft: 10,
        // backgroundColor: Colors.black,
    },
    titleRow: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: 2
    },
    textRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: 2
    },
    text: {
        fontFamily: 'barlow-light',
        fontSize: 18,
        // color: Colors.white

    },
    color: {
        color: 'orange'
    }
});

export default OverviewDetails;
