// importando o pacote
import React from "react"
import { View, TextInput, Pressable, Image } from "react-native"

// importando o estilo
import estilo from "../styles/Temporizador"

// exportando o componente
export default function CaixaTempo(props) {

    // retornando os elementos
    return <View style={ estilo.tempoCaixa }>

        <TextInput 
            style={ estilo.tempoEntrada }
            keyboardType="number-pad" 
            maxLength={ 3 } 
            placeholder="120s"
            value={ props.entrada }
            onChangeText={ props.definirEntrada }/>

        <Pressable 
            onPress={ () => props.definirTempo( props.entrada > 0 ? props.entrada : 60 ) }>

            <View style={ estilo.tempoBotao }>

                <Image 
                    source={ require("../../assets/icone.png") } 
                    style={{ height: 32, width: 32 }} />

            </View>

        </Pressable>

    </View>

}