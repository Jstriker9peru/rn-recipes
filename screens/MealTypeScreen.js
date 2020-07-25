import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";
import { categories } from "../data/data";

const MealTypeScreen = ({ navigation }) => {
    const selectHandler = (category) => {
        const { title, type } = category;
        navigation.navigate("Search Results", { query: { title, type, cuisine: '', searchQuery: '' } });
    };

    return (
        <View style={{ flex: 1, width: "100%" }}>
            <ScrollView style={{ flex: 1, width: "100%" }}>
                {categories.map((category, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => selectHandler(category)}
                    >
                        <ImageBackground
                            source={category.image}
                            style={styles.image}
                        >
                            <View style={styles.category}>
                                <Text style={styles.categoryTitle}>
                                    {category.title}
                                </Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    category: {
        backgroundColor: Colors.extraColor + "66",
        padding: 15,
        marginVertical: 0,
        marginHorizontal: 0,
        borderColor: "black",
        borderRadius: 2,
        borderWidth: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    categoryTitle: {
        fontFamily: 'cantarell',
        fontSize: 22,
        color: Colors.white,
        backgroundColor: "#00000099",
        padding: 5,
    },
    image: {
        flex: 1,
        width: "100%",
        height: 200,
    },
});

export default MealTypeScreen;
