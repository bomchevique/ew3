// importar os pacotes
import React from "react"
import { View, StatusBar, StyleSheet } from "react-native"

// importar o componente
import Placar from "./src/components/Placar"

// declarando o estilo
const estilo = StyleSheet.create({

    tela: {
        backgroundColor: "#03001C",
        flex: 1,
    }
})

// exportando o componente App
export default function App() {

    // retornando os elementos
    return <View style={ estilo.tela }>

        <StatusBar 
            barStyle="light-content" 
            backgroundColor="#03001C"/>

        <Placar 
            titulo="HOME"/>

        <Placar 
            titulo="GUEST"/>

    </View>

}