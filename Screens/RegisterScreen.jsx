





import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const RegisterScreen = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const navigation = useNavigation();

  const handleRegister = () => {

    const user = {
      name: name,
      email: email,
      password: password,
      image: image,
    };

    // send a POST  request to the backend API to register the user
    axios
      .post("http://10.0.2.2:8000/register", user)
      .then((response) => {
        Alert.alert(
          "Registration successful",
          "You have been registered Successfully"
        );
        setName("");
        setEmail("");
        setPassword("");
        setImage("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration Error",
          "An error occurred while registering"
        );
        console.log("registration failed", error);
      });
  };


  return (
    <View
      style={{ flex: 1, backgroundColor: 'white', padding: 10, alignItems: 'center' }}>
      <KeyboardAvoidingView>
        <View style={{ marginTop: 80, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: "#4A55A2", fontSize: 17, fontWeight: '600' }}>Sign up</Text>
          <Text style={{ marginTop: 15, fontSize: 17, fontWeight: '600' }}>Register to your account</Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <View>

            {/* This is Name field */}
            <Text>Name</Text>
            <TextInput style={{ fontSize: email ? 18 : 18, borderBottomColor: 'grey', borderBottomWidth: 1, marginVertical: 5, width: 300 }} placeholderTextColor={'black'} placeholder='Enter Your Name' value={name} onChangeText={(text) => setName(text)} />
          </View>

          {/* This is Email field */}
          <View>
            <Text>Email</Text>
            <TextInput style={{ fontSize: email ? 18 : 18, borderBottomColor: 'grey', borderBottomWidth: 1, marginVertical: 5, width: 300 }} placeholderTextColor={'black'} placeholder='Enter Your Email' value={email} onChangeText={(text) => setEmail(text)} />
          </View>

          {/* This is Password field */}
          <View style={{ marginTop: 10 }}>
            <Text>Password</Text>
            <TextInput style={{ fontSize: email ? 18 : 18, borderBottomColor: 'grey', borderBottomWidth: 1, marginVertical: 5, width: 300 }} placeholderTextColor={'black'} placeholder='Enter Your Password' value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
          </View>

          <View>
            <Text>Imgage</Text>
            <TextInput style={{ fontSize: email ? 18 : 18, borderBottomColor: 'grey', borderBottomWidth: 1, marginVertical: 5, width: 300 }} placeholderTextColor={'black'} placeholder='Choose profile picture' value={image} onChangeText={(text) => setImage(text)} />
          </View>

          <Pressable onPress={handleRegister} style={{ marginTop: 30, marginLeft: 'auto', marginRight: "auto", backgroundColor: '#4A55A2', fontSize: 17, fontWeight: '600', width: 200, padding: 15, borderRadius: 5 }}>

            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", textAlign: "center" }}>Sign up</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Login")} style={{ marginTop: 15 }}>
            <Text style={{ textAlign: 'center', color: 'gray', fontSize: 16 }}>
              Already have an account? Sign in
            </Text>
          </Pressable>
        </View>

      </KeyboardAvoidingView>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})