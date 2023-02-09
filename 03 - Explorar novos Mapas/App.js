// importacao dos pacotes
import React, { useEffect, useState } from "react"
import { View, Text, StatusBar, StyleSheet } from "react-native"

// importacao do elemento de mapa
import MapView from "react-native-maps"

// importacao do sensor de localizacao
import * as Location from "expo-location"

// declaracao de estilo
const estilo = StyleSheet.create({

    tela: { 
        flex: 1 
    },

    indicador: { 
        backgroundColor: "#144272", 
        padding: 32 
    },

    indicardorTexto: { 
        color: "white", 
        fontSize: 20 
    },

    mapa: { 
        height: "100%", 
        width: "100%" 
    }

})

// exportacao do componente App
export default function App() {

    // estado de localizacao
    const [ localizacao, definirLocalizacao ] = useState({})

    // efeito 
    useEffect(function() {

        // funcao para obter a localizacao
        async function ObterLocalizacao() {

            // aguardo da permissao
            await Location.requestForegroundPermissionsAsync()

            // obtendo a posicao atual
            definirLocalizacao(await Location.getCurrentPositionAsync({}))
        
        } 

        // execucao da funcao obter localizacao
        ObterLocalizacao()

    }, [])

    // retorno dos elementos
    return <View style={ estilo.tela }>

        <StatusBar 
            barStyle="light-content" 
            backgroundColor="#144272"/>

        { Object.keys(localizacao).length > 0 &&
            
            <>

                <View style={ estilo.indicador }>

                    <Text style={ estilo.indicardorTexto }> 
                        EXPLORAR NOVOS MAPAS
                    </Text>

                    <Text style={ estilo.indicardorTexto }> 
                        Latitude: { localizacao.coords.latitude } 
                    </Text>

                    <Text style={ estilo.indicardorTexto }> 
                        Longitude: { localizacao.coords.longitude } 
                    </Text>

                    <Text style={ estilo.indicardorTexto }> 
                        Altitude: { localizacao.coords.altitude } 
                    </Text>

                </View>

                <MapView 
                    initialRegion={{
                        latitude: localizacao.coords.latitude,
                        longitude: localizacao.coords.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                    style={ estilo.mapa } />

            </>

        }

    </View>
}