import { safelyDecodeURIComponent } from "expo-router/build/fork/getStateFromPath-forks";
import React from "react";
import { StyleSheet, Text, TextInput TouchableOpacity } from "react-native";

interface Props {
    title: string;
    onPress: () => void
}

interface form {
    title: string;
    onPress: () => void
}

export default function CustomButton({title, onPress}: Props) {
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5
    },
    text: {
        color: "white",
        textAlign: "center"
    }

    <TextInput placeholder = "Digite seu nome"/>
    <TextInput placeholder = "Digite um número"/>
    <TextInput placeholder = "Digite o nome de uma fruta"/>
    
})