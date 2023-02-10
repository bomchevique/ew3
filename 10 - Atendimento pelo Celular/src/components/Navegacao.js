import React from "react"
import { View, Text, Pressable } from "react-native"

import estilo from "../styles/Navegacao"

export default function Navegacao(props) {

    return <View style={ estilo.navegacao }>

        <View style={ estilo.navegacaoTopo }>

            <Text style={ estilo.navegacaoTopoTexto }> 
                Atendimento 
            </Text>

        </View>

        <View style={ estilo.navegacaoBase }>

            <Pressable 
                style={ estilo.navegacaoBaseBotao }
                onPress={ () => props.navigation.navigate("Clinica") }>
                <Text style={ estilo.navegacaoBaseTexto }> 
                    Clinica 
                </Text>
            </Pressable>

            <Pressable 
                style={ estilo.navegacaoBaseBotao }
                onPress={ () => props.navigation.navigate("Paciente") }>
                <Text style={ estilo.navegacaoBaseTexto }>
                    Paciente 
                </Text> 
            </Pressable>

        </View>

    </View>

}