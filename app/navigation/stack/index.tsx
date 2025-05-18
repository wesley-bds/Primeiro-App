import { useRouter } from "expo-router";
import React from "react";
import { Button, View } from "react-native";

export default function OptionScreen() {
    const router = useRouter()
    return (
        <View>
            Estou na página options

            <Button
                title="Ir para detalhes"
                onPress={() => router.push('/navigation/stack/details')}
            />
        </View>
    )
}