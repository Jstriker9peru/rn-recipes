import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Screen } from 'react-native-screens';
import RecipeThumbnail from './RecipeThumbnail';
import CustomRow from './CustomRow';
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';

// const RecipeListItem = ({ recipe, navigation }) => {
//     let { id, title, image } = recipe;

//     const selectHandler = () => {
//         navigation.navigate("Recipe", { recipeId: id });
//     }
//     return (
//         <TouchableOpacity style={styles.container} onPress={selectHandler}>
//             <View style={styles.itemContainer}>
//                 <View style={styles.imageContainer}>
//                     <Image source={{ uri: image }} style={styles.image} />
//                 </View>
//                 <View style={styles.infoContainer}>
//                     <Text style={styles.text}>{title}</Text>
//                 </View>
//             </View>
//         </TouchableOpacity>
//     )
// }

const RecipeListItem = ({ recipe }) => {
    let { id, title, image } = recipe;
    let navigation = useNavigation();
    const selectHandler = () => {
        navigation.navigate("Recipe", { recipeId: id });
    }
    return (
        <TouchableOpacity style={styles.container} onPress={selectHandler}>
            {/* <CustomRow extraStyles={{ marginHorizontal: 10 }} itemDisplay="row"> */}
                <RecipeThumbnail url={image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.text}>{title}</Text>
                    <Text>40 Min Cook Time</Text>
                </View>
            {/* </CustomRow> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 7,
        // marginHorizontal:  10,
        // paddingHorizontal: 5,
        // borderWidth: 1,

        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderRadius: 15,
        backgroundColor: Colors.white,
        // backgroundColor: 'yellow'
    },
    itemContainer: {
        width: "100%",
        marginHorizontal: 10,
        backgroundColor: "grey",
        borderRadius: 15,
        elevation: 3,
    },
    imageContainer: {
        width: '100%',
        height: '50%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    infoContainer: {
        // backgroundColor: 'orange',
        marginLeft: 10,
        width: 200,
        height: "50%",
    },
    text: {
        fontFamily: 'barlow-medium',
        marginBottom: 10,
        fontSize: 17,
        // paddingHorizontal: 10,
        // paddingVertical: 5,
        textTransform: 'capitalize',
        // backgroundColor: 'blue'
    }

})

export default RecipeListItem;