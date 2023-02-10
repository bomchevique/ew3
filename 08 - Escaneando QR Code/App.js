// importando os pacotes
import React, { useEffect, useState } from "react"
import { Text, StatusBar, Pressable } from "react-native"

// importando os pacotes externos
import { LinearGradient } from "expo-linear-gradient"
import { BarCodeScanner } from "expo-barcode-scanner"

// importando o estilo
import estilo from "./AppStyle"

// exportando o componente App
export default function App() {

    // declarando o estado escaneado
    const [ escaneado, estadoEscaneado ] = useState(false)

    // funcao para obter permissao da camera
    async function ObterPermissao() {

        await BarCodeScanner.requestPermissionsAsync()

    }

    // funcao para escanear 
    function Escanear({ type, data }) {

        estadoEscaneado(true)

        alert(data)

    }

    // declarando o efeito para obter permissao
    useEffect(function() {

        ObterPermissao()
        
    }, [])

    // retornando os elementos
    return <LinearGradient 
        style={ estilo.tela }
        colors={[ "#232526", "#414345" ]} >

        <StatusBar 
            translucent 
            barStyle="light-content" 
            backgroundColor="transparent"/>

        { escaneado ?

            <Pressable 
                onPress={ function() { estadoEscaneado(false) } }>

                <Text style={ estilo.texto }> 
                    Escanear novamente 
                </Text>

            </Pressable>

            : 

            <BarCodeScanner
                onBarCodeScanned={ Escanear }
                style={ estilo.camera }
            />

        }
        
    </LinearGradient>
    
}