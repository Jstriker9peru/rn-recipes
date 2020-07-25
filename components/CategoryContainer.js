import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomRow from './CustomRow';
import RecipeListItem from './RecipeListItem';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CategoryScreen = ({ title, data, itemDisplay = "column" }) => {
    return (
        <React.Fragment>
            {(itemDisplay === "row") ? (
                <CustomRow itemDisplay="column">
                    <Text>{title}</Text>
                    <ScrollView horizontal={true}>
                        {data.map(recipe => (
                            <View>
                                <RecipeThumbnail size="large" />
                                <Text style={{ backgroundColor: "blue", textAlign: "center" }}>Brown rice with Steak</Text>
                            </View>
                        ))}
                    </ScrollView>
                    <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", paddingRight: 10, paddingTop: 10}}>
                        <TouchableOpacity>
                            <Button title={`View All ${title}`} color="black" />
                        </TouchableOpacity>
                    </View>
                </CustomRow>
            ) : (
                <CustomRow itemDisplay="column">
                    <Text>{title}</Text>
                    {data.map((recipe) => (
                        <RecipeListItem key={recipe.id} recipe={recipe} />
                    ))}
                </CustomRow>
            )}
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    
})

export default CategoryScreen;