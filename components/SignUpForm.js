import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import Colors from '../constants/Colors';
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().required('You must enter a name').min(6),
    email: yup.string().required('An email is required').email(),
    password: yup.string().required('A password is required').min(6, 'Your password must be at least 6 characters'),
    confirmPassword: yup.string().required('Confirm your password').oneOf([yup.ref('password'), null], 'Passwords must match')
});


const SignUpForm = ({ switchForm }) => {
    const { control, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => console.log(data);
    return (
        <View style={styles.signupForm}>
            <Text style={styles.formTitle}>Sign Up</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Full Name</Text>
                <Controller
                    name="name"
                    defaultValue=""
                    control={control}
                    style={styles.input}
                    render={({ onChange, value }) => (
                        <TextInput style={styles.input} onChangeText={value => {
                            console.log('This is the value in this', value);
                            onChange(value)
                        }} value={value} />
                    )}
                />
                {errors.name && <Text style={styles.errorText} >{errors.name.message}</Text>}
            </View>
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
                    rules={{ required: true }}
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
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Confirm Password</Text>
                <Controller
                    name="confirmPassword"
                    defaultValue=""
                    control={control}
                    render={({ onChange, value }) => (
                        <TextInput style={styles.input} onChangeText={value => onChange(value)} value={value} />
                    )}
                />
                {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>}
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.buttonText}>Create account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.switch} onPress={switchForm}>
                <Text style={styles.switchText}>Already have an account? Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    signupForm: {
        width: "100%",
        height: "auto",
        display: "flex",
        alignItems: "flex-start",
        backgroundColor: 'gray',
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
        marginBottom: 10
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

export default SignUpForm;
