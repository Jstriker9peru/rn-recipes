import React, { useState, useLayoutEffect, useContext } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import CustomRow from "../components/CustomRow";
import Tag from "../components/Tag";
import Colors from "../constants/Colors";
import { categories, cuisines, intolerances, diets } from "../data/data";
import { useSelector, useDispatch } from "react-redux";
import { updateFilters } from "../store/actions/filters-actions";

const FiltersScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const globalFilters = useSelector(state => state.filters);
    const [filters, setFilters] = useState({ ...globalFilters });

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    style={{ marginLeft: 20 }}
                    onPress={clearFilters}
                >
                    <Text style={{ fontSize: 16 }}>Clear</Text>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity
                    style={{ marginRight: 20 }}
                    onPress={() => {
                        dispatch(updateFilters(filters));
                        navigation.goBack();
                    }}
                >
                    <Text style={{ fontSize: 16 }}>Apply</Text>
                </TouchableOpacity>
            ),
        });
    }, [navigation, filters]);

    const addFilter = (param, type) => {
        let withAdded;
        if (type === "category" && filters[type].length > 0) {
            withAdded = [param];
        } else if (type === "diet" && filters[type].length > 0) {
            withAdded = [param];
        } else {
            withAdded = [...filters[type]];
            withAdded.push(param);
        }
        setFilters({ ...filters, [type]: withAdded });
    };

    const removeFilter = (param, type) => {
        setFilters({
            ...filters,
            [type]: filters[type].filter((name) => param !== name),
        });
    };

    const clearFilters = () => {
        setFilters({
            category: [],
            diet: [],
            cuisine: [],
            intolerance: []
        })
    }
    return (
        <View style={styles.screen}>
            <ScrollView style={{ width: "100%" }}>
                <CustomRow itemDisplay="column">
                    <Text>Category</Text>
                    <Text>Choose only one</Text>
                    <View style={styles.tags}>
                        {categories.map((category, index) => (
                            <Tag
                                key={index}
                                tagInfo={category}
                                type="category"
                                add={addFilter}
                                remove={removeFilter}
                                filters={filters}
                            />
                        ))}
                    </View>
                </CustomRow>
                <CustomRow itemDisplay="column">
                    <Text>Diet</Text>
                    <Text>Choose only one</Text>
                    <View style={styles.tags}>
                        {diets.map((diet, index) => (
                            <Tag
                                key={index}
                                tagInfo={diet}
                                type="diet"
                                add={addFilter}
                                remove={removeFilter}
                                filters={filters}
                            />
                        ))}
                    </View>
                </CustomRow>
                <CustomRow itemDisplay="column">
                    <Text>Intolerance</Text>
                    <Text>Choose many</Text>
                    <View style={styles.tags}>
                        {intolerances.map((intolerance, index) => (
                            <Tag
                                key={index}
                                tagInfo={intolerance}
                                type="intolerance"
                                add={addFilter}
                                remove={removeFilter}
                                filters={filters}
                            />
                        ))}
                    </View>
                </CustomRow>
                <CustomRow itemDisplay="column">
                    <Text>Cuisine</Text>
                    <Text>Choose many</Text>
                    <View style={styles.tags}>
                        {cuisines.map((cuisine, index) => (
                            <Tag
                                key={index}
                                tagInfo={cuisine}
                                type="cuisine"
                                add={addFilter}
                                remove={removeFilter}
                                filters={filters}
                            />
                        ))}
                    </View>
                </CustomRow>
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
    tags: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "center",
        marginVertical: 10,
    },
    tag: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 2,
        marginVertical: 4,
        paddingVertical: 10,
        paddingHorizontal: 15,
        minWidth: 80,
        width: "auto",
        height: 35,
        borderRadius: 20,
        borderWidth: 1,
    },
    highlighted: {
        borderWidth: 4,
        backgroundColor: "orange",
        borderColor: "#fed8b1",
    },
});

export default FiltersScreen;
