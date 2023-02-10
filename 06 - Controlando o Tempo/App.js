// importando os pacotes
import React, { useState, useEffect } from "react"
import { StatusBar, View } from "react-native"

// importando os componentes
import Temporizador from "./src/components/Temporizador"
import CaixaTempo from "./src/components/CaixaTempo"

// exportando o componente App
export default function App() {

    // declarando os estados
    const [ tempo, definirTempo ] = useState(60)
    const [ entrada, definirEntrada ] = useState(null)

    // definindo o efeito por tempo
    useEffect(function() {

        // contador em segundos
        const temporizador = tempo > 0 && setInterval(function() {
            definirTempo(tempo - 1)
        }, 1000)

        // resetar o contador de segundos
        return function() {
            clearInterval(temporizador)
        }

    }, [tempo])

    // retornar os elementos
    return <View style={{
        alignItems: "center",
        backgroundColor: "#20262E",
        flex: 1, 
        justifyContent: "center"
    }}>

        <StatusBar 
            barStyle="light-content" 
            backgroundColor="#1C2229"/>

        <Temporizador 
            tempo={ tempo }/>
        
        <CaixaTempo 
            entrada={ entrada } 
            definirEntrada={ definirEntrada }
            definirTempo={ definirTempo }/>

    </View>

}