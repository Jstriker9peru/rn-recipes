
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

const RecipeThumbnail = ({ size = "medium", url }) => {
    return (
        <View style={{ ...styles.thumbnail, ...styles[size] }}>
            <Image style={{ ...styles.thumbnail, ...styles[size] }} source={{ uri: url || 'https://www.seriouseats.com/recipes/images/2015/05/Anova-Steak-Guide-Sous-Vide-Photos15-beauty-1500x1125.jpg' }} />
        </View>
    )
}

const styles = StyleSheet.create({
    thumbnail: {
        marginHorizontal: 3,
        borderRadius: 20
    },
    small: {
        width: 55,
        height: 55,
    },
    medium: {
        width: 105,
        height: 105,
    },
    large: {
        width: 155,
        height: 155,
    }
})

export default RecipeThumbnail;