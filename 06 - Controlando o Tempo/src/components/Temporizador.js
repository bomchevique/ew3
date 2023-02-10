// importando o pacote
import React from "react"
import { View, Text } from "react-native"

// importando o estilo
import estilo from "../styles/Temporizador"

// exportando o componente
export default function Temporizador(props) {

    // retornando os elementos
    return <View>

        <Text style={ estilo.tempoContagem }> { props.tempo } </Text>

        <Text style={ estilo.tempoUnidade }> Segundos </Text>

    </View>

}