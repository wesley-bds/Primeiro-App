import { useRouter } from "expo-router";
import React from "react";
import { Button, View } from "react-native";

export default function SettingsScreen() {
    const router = useRouter()
    return (
        <View>
            Estou na tela de configuração
        </View>
    );
}