// importacao dos pacotes
import React, { useState, useEffect } from "react"
import { LightSensor } from "expo-sensors"
import { ScrollView, StatusBar, View, Text, Image } from "react-native"

// exportacao do componente App
export default function App() {

    // estado illuminance
    const [{ illuminance }, alterarIluminacao] = useState({ illuminance: 0 })

    // efeito
    useEffect(function() { 

        // atualizar o estado
        LightSensor.addListener(alterarIluminacao) 

    }, [])

    // funcao de verificao de illuminance
    function VerificarLuz(escuro, claro) {

        // retorno do tema a partir da iluminacao
        return illuminance > 20 ? 
            escuro : claro

    }

    // retorno dos elementos do componente
    return <ScrollView 
        style={{ 
            backgroundColor: VerificarLuz("#FFFBEB", "#20262E") 
        }}
    >

        <StatusBar 
            barStyle={ VerificarLuz("dark-content", "light-content") } 
            backgroundColor={ VerificarLuz("#FFFBEB", "#20262E") }
        />

        <View>

            <Text style={{ 
                color: VerificarLuz("#222", "#fff"), 
                fontSize: 32, 
                textAlign: "center" 
            }}> 
                Sensores do Smartphone!
            </Text>

            <Text style={{ 
                color: VerificarLuz("#222", "#fff"), 
                fontSize: 16, 
                textAlign: "center" 
            }}>
                { illuminance }
            </Text>

            <Image 
                source={{ 
                    uri: VerificarLuz("http://picsum.photos/200/200?random=1", "http://picsum.photos/200/200?random=2") 
                }} 
                style={{ height: 200 }} />

        </View>

    </ScrollView>

}