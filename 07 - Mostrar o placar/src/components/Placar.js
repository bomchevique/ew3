// importando os pacotes
import React, { useState } from "react"
import { View, Text, Pressable } from "react-native"

// importando o estilo
import estilo from "../styles/Placar"

// exportando o componente
export default function Placar(props) {

    // declarando o estado pontuacao
    const [ pontuacao, definirPontuacao ] = useState(0)

    // retornando os elementos
    return <View style={ estilo.placar }>

        <Text style={ estilo.placarTitulo }> 
            { props.titulo } 
        </Text>
        
        <Text style={ estilo.placarPontuacao }> 
            { pontuacao } 
        </Text>

        <View style={ estilo.placarCampo }>

            <Pressable 
                onPress={ () => definirPontuacao(pontuacao + 1) }>

                <Text style={ estilo.placarBotao }> 
                    + 
                </Text>

            </Pressable>

            <Pressable 
                onPress={ () => definirPontuacao(pontuacao - 1) }>

                <Text style={ estilo.placarBotao }> 
                    - 
                </Text>

            </Pressable>

        </View>

    </View>

}