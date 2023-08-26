








import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import { UserType } from '../UserContext';
import FriendRequest from '../Component/FriendRequest';

const FriendScreen = () => {    
    const [friendRequests, setFriendRequests] = useState([]);
    const { userId, setUserId } = useContext(UserType);


    useEffect(()=>{
        fetchFriendRequests()
    },[])

    const fetchFriendRequests = async () => {
        try {
          const response = await axios.get(
            `http://10.0.2.2:8000/friend-request/${userId}`
          );
          console.log(response);
          if (response.status === 200) {
            const friendRequestsData = response.data.map((friendRequest) => ({
              _id: friendRequest._id,
              name: friendRequest.name,
              email: friendRequest.email,
              image: friendRequest.image,
            }));
    
            setFriendRequests(friendRequestsData);
          }
        } catch (err) {
          console.log("error message", err);
        }
      };
    
    //   console.log(friendRequests);

  return (
    <View style={{padding:10,marginHorizontal:12}}>
      {friendRequests.length > 0 && <Text> Your Friend Requests</Text>}

      {
        friendRequests.map((item, index) =>(
            <FriendRequest key={index} item={item} friendRequests={friendRequests} setFriendRequests={setFriendRequests}/>
        ))
      }

    </View>
  )
}

export default FriendScreen

const styles = StyleSheet.create({})