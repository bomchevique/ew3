// importacao dos pacotes
import React from "react"
import { ScrollView, StatusBar, StyleSheet, View, Text, Image } from "react-native"

// declaracao do estilo
const estilo = StyleSheet.create({

    tela: {
        backgroundColor: "#19282F"
    },

    titulo: {
        color: "#FF6464",
        fontSize: 48,
        marginVertical: 32,
        textAlign: "center"
    },

    texto: {
        color: "#aaa",
        fontSize: 20,
        margin: 32
    },

    imagem: {
        height: 200,
        width: "100%"
    }

})

// exportacao do componente
export default function App() {

    // retorno dos elementos
    return <ScrollView style={ estilo.tela }>

        <StatusBar barStyle="light-content" backgroundColor="#19282F"/>

        <View>

            <Text style={ estilo.titulo }> Titulo do App </Text>

            <Text style={ estilo.texto }> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacus mauris, dictum et imperdiet ac, dapibus nec tortor.
            </Text>

            <Image style={ estilo.imagem } source={{ uri: "https://picsum.photos/200/200" }}/>

        </View>

    </ScrollView>

}