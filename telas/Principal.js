import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import TelaConsultar from "./Consultar";
import TelaVeiculos from "./Veiculos";
import TelaConfig from "./Config";
import TelaInicial from "./Home";
import MaterialIcons from '@react-native-vector-icons/material-icons'

const Aba= createBottomTabNavigator();


export default function Principal(){
    return(
        <Aba.Navigator initialRouteName="Home">
            <Aba.Screen name="Home" component={TelaInicial} options={{tabBarIcon: ({color, size}) => (
                <MaterialIcons name="home" color={color} size={size} />
            ) }} />
            <Aba.Screen name="Consultar" component={TelaConsultar} options={{tabBarIcon: ({color, size}) => (
                <MaterialIcons name="search" color={color} size={size} />
            ) }} />
            <Aba.Screen name="Meus Veiculos" component={TelaVeiculos} options={{tabBarIcon: ({color, size}) => (
                <MaterialIcons name="ambulance" color={color} size={size} />
            ) }} />
            <Aba.Screen name="Configurações" component={TelaConfig} options={{tabBarIcon: ({color, size}) => (
                <MaterialIcons name="settings" color={color} size={size} />
            ) }} />
            
        </Aba.Navigator>
    );
}

