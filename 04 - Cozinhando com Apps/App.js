// importacao dos pacotes
import React from "react"
import { ScrollView, StatusBar, View, Text, Image, StyleSheet } from "react-native"

// declaracao do estilo
const estilo = StyleSheet.create({

    tela: {
        backgroundColor: "#fff"
    },

    topo: {
        alignItems: "center",
        backgroundColor: "#f54748",
        padding: 32
    },

    topoImagem: {
        height: 64,
        width: 64
    },

    topoTexto: {
        color: "#fff",
        fontSize: 32,
        textAlign: "center"
    },  

    receita: {
        marginVertical: 16,
        marginHorizontal: 32
    },

    receitaImagem: {
        height: 200,
        width: "auto"
    },

    receitaTitulo: {
        fontSize: 32,
        fontWeight: "bold",
        marginVertical: 16,
        textAlign: "center"
    },

    receitaSubtitulo: {
        fontSize: 24,
        marginVertical: 16,
    }

})

// exportacao do componente App
export default function App() {

    // retorno dos elementos
    return <ScrollView style={ estilo.tela }>

        <StatusBar 
            backgroundColor="#f54748" 
            barStyle="light-content"/>

        <View style={ estilo.topo }>

            <Image 
                style={ estilo.topoImagem } 
                source={ require("./assets/icon.png") }/>

            <Text style={ estilo.topoTexto }> 
                MELOGRANO {"\n"}
                Cozinhando com APPs
            </Text>

        </View>

        <View style={ estilo.receita }>

            <Text style={ estilo.receitaTitulo }> 
                Bolo de Cenoura 
            </Text>

            <Image 
                style={ estilo.receitaImagem } 
                source={ require("./assets/foto_bolo.jpg") }/>

            <Text style={ estilo.receitaSubtitulo }> 
                Ingredientes 
            </Text>

            <Text>
                1/2 xícara (chá) de óleo {"\n"}
                3 cenouras médias raladas {"\n"}
                4 ovos {"\n"}
                2 xícaras (chá) de açúcar {"\n"}
                2 e 1/2 xícaras (chá) de farinha de trigo {"\n"}
                1 colher (sopa) de fermento em pó
            </Text>

            <Text style={ estilo.receitaSubtitulo }> 
                Ingredientes 
            </Text>

            <Text>
                Em um liquidificador, adicione a cenoura, os ovos e o óleo, depois misture. {"\n"}
                Acrescente o açúcar e bata novamente por 5 minutos. {"\n"}
                Em uma tigela ou na batedeira, adicione a farinha de trigo e depois misture novamente. {"\n"}
                Acrescente o fermento e misture lentamente com uma colher. {"\n"}
                Asse em um forno preaquecido a 180° C por aproximadamente 40 minutos. {"\n"}
            </Text>

        </View>

        <View style={ estilo.receita }>

            <Text style={ estilo.receitaTitulo }> 
                Pudim de Leite Condensado 
            </Text>

            <Image 
                style={ estilo.receitaImagem } 
                source={ require("./assets/foto_pudim.jpg") }/>

            <Text style={ estilo.receitaSubtitulo }> 
                Ingredientes 
            </Text>

            <Text>
                1 lata de leite condensado {"\n"}
                1 lata de leite {"\n"}
                3 ovos inteiros {"\n"}
                1 xícara (chá) de açúcar {"\n"}
                1/2 xícara de água
            </Text>

            <Text style={ estilo.receitaSubtitulo }> 
                Ingredientes 
            </Text>

            <Text>
                Primeiro, bata bem os ovos no liquidificador. {"\n"}
                Acrescente o leite condensado e o leite, e bata novamente. {"\n"}
                Derreta o açúcar na panela até ficar moreno, acrescente a água e deixe engrossar. {"\n"}
                Asse em forno médio por 45 minutos, com a assadeira redonda dentro de uma maior com água. {"\n"}
                Espete um garfo para ver se está bem assado. {"\n"}
                Deixe esfriar e desenforme. {"\n"}
            </Text>

        </View>

    </ScrollView>

}