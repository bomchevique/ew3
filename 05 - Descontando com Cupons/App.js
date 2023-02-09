// importacao dos pacotes
import React from "react"
import { ScrollView, View, StatusBar } from "react-native"

// importacao do componente promocao
import Promocao from "./src/components/Promocao"

// exportacao do componente app
export default function App() {

    // retorno dos elementos
    return <ScrollView>

        <StatusBar barStyle="dark-content" backgroundColor="#fff"/>

        <View>

            <Promocao 
                titulo="Promoção em Tênis de Corrida!"
                imagem={ require("./src/data/Tenis.webp") }
                promocao={ 8 }
                codigo="TENISC"/>

            <Promocao 
                titulo="Promoção para Eletrônicos!"
                imagem={ require("./src/data/Eletronicos.jpg") }
                promocao={ 5 }
                codigo="ELETR08"/>

            <Promocao 
                titulo="DESCONTO cremes!"
                imagem={ require("./src/data/Cremes.jpg") }
                promocao={ 10 }
                codigo="PELECUIDAR"/>

        </View>

    </ScrollView>

}