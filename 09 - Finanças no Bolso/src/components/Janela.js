// importando os pacotes
import React from "react"
import { View } from "react-native"

// importando o estilo
import Estilo from "../styles/Janela"

// exportando o componente
export default function Janela(props) {
    
    // retornando os elementos
    return <View style={ Estilo.janela }>
        
        { props.children }

    </View>

}