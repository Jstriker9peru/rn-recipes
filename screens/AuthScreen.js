import React, { useState } from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import Colors from '../constants/Colors';
import LogInForm from '../components/LogInForm';
import SignUpForm from '../components/SignUpForm';

const AuthScreen = () => {
    const [authForm, setAuthForm] = useState("Log In");
    const switchForm = () => {
        let newForm = (authForm === "Log In") ? "Sign Up" : "Log In";
        setAuthForm(newForm);
    };
    return (
        <View style={styles.screen}>
            {authForm === "Log In" ? <LogInForm switchForm={switchForm} /> : <SignUpForm switchForm={switchForm} />}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.white,
        paddingHorizontal: 30
    }
})

export default AuthScreen;
