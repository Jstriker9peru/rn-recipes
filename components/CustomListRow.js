import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";
import RecipeThumbnail from "./RecipeThumbnail";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const CustomListRow = ({ recipes, buttonTitle, param, paramType }) => {
    let navigation = useNavigation();
    return (
        <ScrollView horizontal={true}>
            {recipes ? (
                <React.Fragment>
                    {recipes && recipes.results && recipes.results.map(({ title, image, id }, index) => (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate("Recipe", { recipeId: id })}>
                            <View style={styles.itemCenter}>
                                <RecipeThumbnail url={image} size="large" />
                                <Text
                                    numberOfLines={2}
                                    ellipsizeMode="tail"
                                    style={styles.titleText}
                                >
                                    {title}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity onPress={() => navigation.navigate("Search Results", { searchQuery: '', [paramType]: param })}>
                        <View style={styles.viewAllContainer}>
                            <View style={styles.rounded}>
                                <Text style={styles.buttonText}>{`View All ${buttonTitle}`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </React.Fragment>
            ) : (
                <View>
                    <ActivityIndicator size="small" />
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    itemCenter: {
        display: 'flex',
        alignItems: 'center'
    },
    titleText: {
        fontFamily: 'barlow-medium',
        textAlign: "center",
        width: 155
    },
    viewAllContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 155,
        height: 155,
        borderRadius: 20,
        marginHorizontal: 6,
        backgroundColor: 'black',
    },
    rounded: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 20,
        width: "100%",
    },
    buttonText: {
        textAlign: "center",
        fontSize: 16,
        color: Colors.white,
        textTransform: 'uppercase',
        paddingHorizontal: 2
    }
});

export default CustomListRow;
