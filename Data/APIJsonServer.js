import { View, Text ,ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'

const APIJsonServer = () => {

    const [data, setData] = useState([]);

    const getAPIData = async () => {
        const url = 'http://192.168.1.4:3000/users';
        let result = await fetch(url);
        result = await result.json();
        setData(result);
      };

    useEffect(()=>{
        getAPIData()
    },[])
  return (
    <View>
      <Text style={{fontSize:30}}>API Json Server</Text>
      {data.length ? (
        <ScrollView>
          {data.map(item => (
            <View
              key={item.id} // Add key to each item
              style={{
                padding: 10,
                borderBottomColor: '#ccc',
                borderBottomWidth: 1,
              }}>
              <Text style={{ fontSize: 20, backgroundColor: '#ddd' }}>
                Id: {item.id}
              </Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                name: {item.name}
              </Text>
              <Text style={{ fontSize: 20 }}>email: {item.email}</Text>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text>No Data</Text>
      )}
    </View>
  )
}

export default APIJsonServer