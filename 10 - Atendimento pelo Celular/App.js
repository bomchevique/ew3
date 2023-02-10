import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { useFonts } from "expo-font"

import Clinica from "./src/screens/Clinica"
import Paciente from "./src/screens/Paciente"

const Stack = createNativeStackNavigator()

export default function App() {

    const [ fonteCarregada ] = useFonts({

        "Poppins": require("./assets/Poppins.ttf")
        
    })

    if (fonteCarregada) 

        return <NavigationContainer>
            <Stack.Navigator initialRouteName="Clinica" screenOptions={{ headerShown: false }}>

                <Stack.Screen name="Clinica" component={ Clinica }/>

                <Stack.Screen name="Paciente" component={ Paciente }/>

            </Stack.Navigator>
        </NavigationContainer>
    
}