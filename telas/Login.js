import React from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import estilo from "../assets/Formatacao";
import { Button, TextInput } from "react-native-paper";


function Login({navigation}){

    function logar (){
        navigation.reset({
            index:0,
            routes:[{name:"Principal"}]
        });

        
    }
    return(
        <SafeAreaView style={estilo.tela}>
            <Image style={estilo.logo} source={require('../assets/icon.png')} ></Image>
            <Text style={estilo.slogan}> Seu histórico nossa confiança</Text>

            <TextInput label={'Usuario'} keyboardType="email-address" returnKeyType="done" style={estilo.campo}  />
            <TextInput label={'Senha'} keyboardType="numeric" returnKeyType="done" style={estilo.campo}/>
            <TouchableOpacity>
            <Button  mode="contained" icon="login" style={estilo.botao}  onPress={logar} >Entrar</Button>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Login;