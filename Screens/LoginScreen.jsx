





import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {

  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const navigation = useNavigation();

  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       const token = await AsyncStorage.getItem("authToken");

  //       if (token) {
  //         navigation.replace("Home");
  //       } else {
  //         // token not found , show the login screen itself
  //       }
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };

  //   checkLoginStatus();
  // }, []);
  

  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };

    axios
      .post("http://10.0.2.2:8000/login", user)
      .then((response) => {
        // console.log(response);
        const token = response.data.token;
        AsyncStorage.setItem("authToken", token);

        navigation.replace("Home");
      })
      .catch((error) => {
        Alert.alert("Login Error", "Invalid email or password");
        console.log("Login error kk ",error.response.data);
      });
  };


  return (
    <View style={ {flex:1,backgroundColor:'white',padding:10,alignItems:'center'}}>
     <KeyboardAvoidingView>
      <View style={{marginTop:100,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:"#4A55A2",fontSize:17,fontWeight:'600'}}>Sign In</Text>
        <Text style={{marginTop:15,fontSize:17,fontWeight:'600'}}>Sign In to your account</Text>
      </View>

      <View style = {{marginTop:50}}>
        <View>
          <Text>Email</Text>
          <TextInput style={{fontSize:email ? 18:18 ,borderBottomColor:'grey',borderBottomWidth:1,marginVertical:10,width:300}} placeholderTextColor={'black'} placeholder='Enter Your Email' value={email} onChangeText={(text)=>setEmail(text)}/>

        </View>

        <View style={{marginTop:10}}>
          <Text>Password</Text>
          <TextInput style={{fontSize:email ? 18:18 ,borderBottomColor:'grey',borderBottomWidth:1,marginVertical:10,width:300}} placeholderTextColor={'black'} placeholder='Enter Your Password' value={password} onChangeText={(text)=>setPassword(text)} secureTextEntry={true}/>

        </View>
        <Pressable onPress={handleLogin} style={{marginTop:30, marginLeft:'auto',marginRight:"auto", backgroundColor:'#4A55A2',fontSize:17,fontWeight:'600',width:200,padding:15,borderRadius:5}}>

          <Text style={{color:"white",fontSize:16,fontWeight:"bold",textAlign:"center"}}>Login</Text>
        </Pressable>

        <Pressable onPress={()=>navigation.navigate("Register")} style={{marginTop:15}}>
          <Text style={{textAlign:'center',color:'gray',fontSize:16}}>
          Don't have an account? Sign up
          </Text>
        </Pressable>
      </View>

     </KeyboardAvoidingView>  
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})