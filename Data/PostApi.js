import { View, Text,TextInput, StyleSheet } from 'react-native'
import React from 'react'

const PostApi = () => {
  return (
    <View>
      <Text style={{fontSize:30}}>PostApi</Text>
      <TextInput placeholder='Enter you Name'/>
   
    </View>
  )
}

const styles=StyleSheet.create({
  input:{
    borderColor:'skyblue',
    borderWidth:1
  }
})

export default PostApi