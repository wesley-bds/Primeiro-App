import CustomButton from "@/components/Title";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
    const name = "Nathan";

    const [count, setCount] = useState(0);
    const [nome, setNome] = useState(name);

    function alterarCount(value: number){
        setCount(count + value);
    }

    return (
        <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
            <Text>Bem vindo ao meu App, {nome}!</Text>
            <Text>Contador: {count}</Text>
                <Button 
                title="Aumentar"
                onPress={() => {setCount(count + 1)}}/>               
                <br></br>
                <Button
                title="Diminuir"
                onPress={() => {setCount(count - 1)}}/>               
                <br></br>            
                <Button
                title="Resetar"
                onPress={() => {setCount(count - count)}}/>              
                <br></br>
                
                
                <TextInput 
                placeholder="Digite seu nome aqui"
                onChangeText={setNome}
                />
                           
                <CustomButton
                title="Botão vermelho"
                onPress={() => {setNome('Nathan ' + count)}}
                />
        </View>
    );
}