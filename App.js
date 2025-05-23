import react from "react";
import { SafeAreaView, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from './telas/Login';
import Principal from './telas/Principal';
import { NavigationContainer } from "@react-navigation/native";

var pilha = createStackNavigator();

function MinhaPilha(){
  return(
    <pilha.Navigator initialRouteName="Login" >
      <pilha.Screen name="Login" component={Login} options={{ headerShown: false}}  />
      <pilha.Screen name="Principal" component={Principal} />
      
    </pilha.Navigator>
  )
}

function App(){
  return(
    <NavigationContainer>
      <MinhaPilha/>
    </NavigationContainer>
  )
  
}

export default App;

// 