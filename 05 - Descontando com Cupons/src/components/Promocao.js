// importacao dos pacotes
import React, { useState } from "react"
import { View, Text, ImageBackground, Pressable } from "react-native"

// importacao do pacote para copiar
import { setStringAsync } from "expo-clipboard"

// importacao do estilo
import estilo from "../styles/Promocao"

// exportacao do componente promocao
export default function Promocao(props) {

    // estado codigo
    const [ estadoCodigo, mudarEstadoCodigo ] = useState(false)

    // funcao para alterar o estado
    async function AlterarEstado() {

        // inverter o estado 
        mudarEstadoCodigo(!estadoCodigo)

        // copiar o codigo
        await setStringAsync(props.codigo)

    }

    // retornar os elementos
    return <Pressable onPress={ AlterarEstado }>

        <View style={ estilo.desconto }>

            <Text style={ estilo.descontoTitulo }> 

                { props.titulo } 

            </Text>

            <ImageBackground 
                style={ estilo.descontoImagem } 
                source={ props.imagem }>

                <Text style={ estilo.descontoDados }> 

                    { props.promocao }% 

                </Text>

            </ImageBackground>

            { estadoCodigo &&

                <Text style={ estilo.descontoCodigo }> 

                    { props.codigo }
                    
                </Text>

            }

        </View>

    </Pressable>
}