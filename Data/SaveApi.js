import {View, Text, Button} from 'react-native';
import React from 'react';

const SaveApi = () => {
  const SaveApiData = async () => {
    
    const data = {
      name: 'Asit',
      age: 40,
      email: 'Asit@123gmail.com',
    };

    const url = 'http://localhost:3000/users';
    let result = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });
    result = await result.json();
    console.warn(result);
  };

  return (
    <View>
      <Text style={{fontSize: 30}}>SaveApi</Text>
      <Button title="Save Data" onPress={SaveApiData} />
    </View>
  );
};

export default SaveApi;
