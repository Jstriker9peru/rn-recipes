
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const CustomRow = ({ itemDisplay, children, extraStyles }) => {
    return (
        <View style={{ ...styles.rowContainer, ...styles[itemDisplay], ...extraStyles }}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    rowContainer: {
        display: "flex",
        paddingVertical: 15,
        paddingHorizontal: 20, 
        width: "100%",
        height: "auto",
        backgroundColor: Colors.white,
    },
    column: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start"   
    },
    row: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"  
    }
})

export default CustomRow;