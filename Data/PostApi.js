import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';

  const PostApi = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  const saveData = async () => {
    console.warn(name);
    console.warn(age);
    console.warn(email);
    const url = 'http://192.168.1.4:3000/users';
    let result = await fetch(url, {
      method: 'Post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, email, age}),
    });
    result = await result.json();
    if (result) {
      console.warn('Data added');
    }
  };
  return (
    <View>
      <Text style={{fontSize: 30}}>PostApi</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Age"
        value={age}
        onChangeText={text => setAge(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your EmailId"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Button title="Save Me" onPress={saveData} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'skyblue',
    borderWidth: 1,
    margin: 20,
  },
});

export default PostApi;
