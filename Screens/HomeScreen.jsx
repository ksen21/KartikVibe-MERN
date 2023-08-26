









import { StyleSheet, Text, View } from 'react-native'
import React,{useLayoutEffect,useContext,useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons';
import {UserType } from '../UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import User from '../Component/User';


const HomeScreen = () => {

  const navigation = useNavigation();
  const {userId,setUserId} = useContext(UserType)
  const [users,setUsers] = useState([])

  useLayoutEffect(() => {
  
  navigation.setOptions({
    headerTitle:"",
    headerLeft:()=>(
      <Text style={{fontSize:16,fontWeight:'bold'}}>KartikVibe</Text>
    ),
    headerRight:()=> (
      <View style={{flexDirection:'row',alignItems:'center', gap:8}}>
        <Icon name='chatbox-ellipses-outline' size={24} color= "black" onPress={()=> navigation.navigate("Chats")}/>
        <Icon name='people-outline' size={24} color= "black" onPress={()=> navigation.navigate("Friends")}/>
      </View>
    )

  })
 
  },[])

  useEffect(() => {
   
    const fetchUsers = async () => {
      const token = await AsyncStorage.getItem('authToken');
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.userId
      setUserId(userId);

      axios.get(`http://10.0.2.2:8000/users/${userId}`).then((response) => {
        setUsers(response.data)
      }).catch((err) => {
        console.log("Error retrieving users", err)
      })
    }

    fetchUsers();
   
  }, [])

  

  return (
    <View>
      <View style={{padding:10}}>
        {
          users.map((item,index) => (
            <User key={index} item = {item}/>
          ))
        } 
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})