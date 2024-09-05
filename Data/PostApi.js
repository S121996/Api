import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';

const PostApi = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [EmailIdError, setEmailError] = useState(false);

  const saveData = async () => {
    setNameError(!name ? true : false);
    setAgeError(!age ? true : false);
    setEmailError(!email ? true : false);

    if (!name || !age || !email) {
      return false;
    }

    console.warn("next");
    console.warn(name);
    console.warn(age);
    console.warn(email);

    const url = 'http://192.168.1.4:3000/users';
    let result = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, email, age}),
    });

    result = await result.json();
    result && console.warn('Data added');
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
      {nameError ? <Text style={styles.errorText}>Please enter a valid name</Text> : null}
      
      <TextInput
        style={styles.input}
        placeholder="Enter your Age"
        value={age}
        onChangeText={text => setAge(text)}
      />
      {ageError ? <Text style={styles.errorText}>Please enter a valid age</Text> : null}
      
      <TextInput
        style={styles.input}
        placeholder="Enter your EmailId"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      {EmailIdError ? <Text style={styles.errorText}>Please enter a valid Email Id</Text> : null}
      
      <Button title="Save Me" onPress={saveData} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'skyblue',
    borderWidth: 1,
    margin: 20,
    fontSize: 20,
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    marginLeft: 20,
  },
});

export default PostApi;
