import { View, Text } from 'react-native'
import React from 'react'
import ScrollView1 from './Data/ScrollView'
import FlatList1 from './Data/FlatList'
import APIJsonServer from './Data/APIJsonServer'
import SaveApi from './Data/SaveApi'
import PostApi from './Data/PostApi'

const App = () => {
  return (
    <View>
       {/* <FlatList1/> */}
      {/* <ScrollView1/> */}
      {/* <APIJsonServer/> */}
     {/* <SaveApi/> */}
     <PostApi/>
    </View>
  )
}

export default App