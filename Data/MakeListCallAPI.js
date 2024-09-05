import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';

const MakeListCallAPI = () => {
  const [data, setData] = useState([]);

  const getAPIData = async () => {
    const url = 'http://192.168.1.4:3000/users';
    let result = await fetch(url);
    result = await result.json();
    console.warn(result);
    if (result) {
      setData(result);
    }
  };

  const deleteUser = async (id) => {
    const url = 'http://192.168.1.4:3000/users';
    // console.warn(`${url}/${id}`);
    let result = await fetch(`${url}/${id}`, {
      method: 'delete',
    });
    result = await result.json();
    if (result) {
      console.warn('User deleted');
      getAPIData();
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <ScrollView style={styles.input}>
      <View style={styles.errorText}>
        <View style={{flex: 1.5}}>
          <Text>Name</Text>
        </View>
        <View style={{flex: 1.5}}>
          <Text>Id</Text>
        </View>
        <View style={{flex: 2}}>
          <Text>Operations</Text>
        </View>
      </View>
      {data.length
        ? data.map(item => (
            <View style={styles.errorText}>
              <View style={{flex: 1}}>
                <Text>{item.id}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text>{item.name}</Text>
              </View>
              <View style={{flex: 1}}>
                <Button onPress={()=>deleteUser(item.id)} title="Delete" />
              </View>
              <View style={{flex: 1}}>
                <Button title="Update" />
              </View>
            </View>
          ))
        : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {},
  errorText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'orange',
    margin: 5,
  },
});

export default MakeListCallAPI;
