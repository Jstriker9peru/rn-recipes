import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import RecipeThumbnail from '../components/RecipeThumbnail';
import Colors from "../constants/Colors";

const ProfileScreen = () => {
    return (
        <View style={styles.screen}>
            <ScrollView>
            
            <View style={styles.row}>
                <View style={styles.nameContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.profileImage}
                            width={100}
                            height={100}
                            source={{
                                uri:
                                    "https://www.kindpng.com/picc/m/24-248082_teen-titans-go-characters-png-download-robin-teen.png",
                            }}
                        />
                    </View>
                    <View style={styles.name}>
                        <Text style={styles.boldText}>Jonathan Espinoza</Text>
                        <Text style={styles.text}>Food innovator</Text>
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.contactContainer}>
                    <Text style={styles.boldText}>Contact Information</Text>
                    <Text style={styles.text}>jstriker9peru@gmail.com</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.savedContainer}>
                    <Text style={styles.boldText}>My Saved Recipes</Text>
                    <Text style={styles.text}>You have saved 10 recipes</Text>
                    <View style={styles.recipeThumbnails}>
                        <RecipeThumbnail size="small" />
                        <RecipeThumbnail size="small" />
                        <RecipeThumbnail size="small" />
                        <RecipeThumbnail size="small" />
                        <View style={styles.seeAll}>
                            <Text style={styles.text}>View all+</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.myRecipes}>
                    <Text style={styles.boldText}>My Created Recipes</Text>
                    <Text style={styles.text}>
                        You have created 5 new recipes
                    </Text>
                    <View style={styles.recipeThumbnails}>
                        <RecipeThumbnail size="small" />
                        <RecipeThumbnail size="small" />
                        <RecipeThumbnail size="small" />
                        <RecipeThumbnail size="small" />
                        <View style={styles.seeAll}>
                            <Text style={styles.text}>View all+</Text>
                        </View>
                    </View>
                </View>
            </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        display: "flex",
        height: "auto",
        paddingVertical: 10,
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: Colors.white,
    },
    row: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 20, 
        width: "100%",
        height: "auto",
        backgroundColor: Colors.white,
    },
    nameContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%"
    },
    imageContainer: {
        marginRight: 20
    },
    profileImage: {
        borderRadius: 50
    },
    contactContainer: {
        display: "flex",
        justifyContent: "flex-start",
        width: "100%"
    },
    savedContainer: {
        display: "flex",
        justifyContent: "flex-start",
        width: "100%"
    },
    myRecipes: {
        display: "flex",
        justifyContent: "flex-start",
        width: "100%"
    },
    boldText: {
        fontSize: 17,
        fontWeight: "bold"
    },
    text: {
        fontSize: 15,
        fontWeight: "100"
    },
    recipeThumbnails: {
        display: "flex",
        flexDirection: "row",
    },
    seeAll: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 3,
        paddingHorizontal: 2,
        borderRadius: 15,
        backgroundColor: 'lightgreen'
    }
});

export default ProfileScreen;
