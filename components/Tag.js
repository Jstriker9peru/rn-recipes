import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CategoryScreen = ({ tagInfo, type, add, remove, filters }) => {
    let isHighlighted = filters[type].some(name => tagInfo.param === name);

    useEffect(() => {
    }, [isHighlighted, filters]);
    return (
        <TouchableOpacity onPress={isHighlighted ? () => remove(tagInfo.param, type) : () => add(tagInfo.param, type)} >
            <View
                style={
                    isHighlighted
                        ? { ...styles.tag, ...styles.highlighted }
                        : styles.tag
                }
            >
                <Text style={styles.tagName}>{tagInfo.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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

export default CategoryScreen;
