// importando os pacotes
import React from "react"
import { View, Text } from "react-native"

// importando o estilo
import Estilo from "../styles/Grafico"

// exportando o componente
export default function Grafico(props) {

    // retornando os elementos
    return <View style={ Estilo.grafico }>

        <View style={[ Estilo.graficoBarra, { width: `${props.porcentagem}%` } ]}>

            <Text style={ Estilo.graficoTexto }> 

                { props.porcentagem + "%" } 
                
            </Text>

        </View>

    </View>

}