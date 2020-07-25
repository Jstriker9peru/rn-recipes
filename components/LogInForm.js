import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import Colors from '../constants/Colors';
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().required('An email is required').email('Email must be a valid email'),
    password: yup.string().required('A password is required').min(6, 'Your password must be at least 6 charcters')
});

const LogInForm = ({ switchForm }) => {
    const { control, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
      });
    const onSubmit = data => console.log(data);

    console.log('These are the errors in the login form', errors);
    return (
        <View style={styles.loginForm}>
            <Text style={styles.formTitle}>Login</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email</Text>
                <Controller
                    name="email"
                    defaultValue=""
                    control={control}
                    style={styles.input}
                    render={({ onChange, value }) => (
                        <TextInput style={styles.input} onChangeText={value => onChange(value)} value={value} />
                    )}
                />
                {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Password</Text>
                <Controller
                    name="password"
                    defaultValue=""
                    control={control}
                    render={({ onChange, value }) => (
                        <TextInput style={styles.input} onChangeText={value => onChange(value)} value={value} />
                    )}
                />
                {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.switch} onPress={switchForm}>
                <Text style={styles.switchText}>No account? Sign up instead</Text>
            </TouchableOpacity>
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
    },
    loginForm: {
        width: "100%",
        height: "auto",
        display: "flex",
        alignItems: "flex-start",
        backgroundColor: 'grey',
        paddingHorizontal: 30,
        paddingBottom: 20
    },
    formTitle: {
        fontSize: 20,
        fontFamily: "barlow-medium",
        marginVertical: 20
    },  
    inputContainer: {
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        marginBottom: 20
    },
    inputLabel: {
        fontSize: 14,
        marginBottom: 5,
    },  
    input: {
        backgroundColor: "white",
        borderRadius: 5,
        width: "100%",
        paddingLeft: 10
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingVertical: 6,
        backgroundColor: "black",
    },
    errorText: {
        color: 'red',
        marginTop: 2
    },
    buttonText: {
        textTransform: 'uppercase',
        color: Colors.white,
        letterSpacing: 0.5,
        fontSize: 15
    },
    switch: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        width: "100%"
    },
    switchText: {
        color: "white"
    }
})

export default LogInForm;
