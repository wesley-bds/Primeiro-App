import React from "react";
import { Slot, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Início',
                    tabBarIcon: ({ color, size }) => <Ionicons name='home-outline' size={size} color={color} />
                }}
            />

            <Tabs.Screen
                name='about'
                options={{
                    title: 'Sobre',
                    tabBarIcon: ({ color, size }) => <Ionicons name='information-outline' size={size} color={color} />
                }}
            />

            <Tabs.Screen
                name='search'
                options={{
                    title: 'Pesquisar',
                    tabBarIcon: ({ color, size }) => <Ionicons name='search-outline' size={size} color={color} />
                }}
            />

            <Tabs.Screen
                name='settings'
                options={{
                    title: 'Configurações',
                    tabBarIcon: ({ color, size }) => <Ionicons name='settings-outline' size={size} color={color} />
                }}
            />

            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color, size }) => <Ionicons name='person-outline' size={size} color={color} />
                }}
            />

        </ Tabs>
    );
}