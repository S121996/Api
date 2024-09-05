import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';

const FlatList1 = () => {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View>
      <Text style={{fontSize: 30}}>hello sumit</Text>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                borderBottomColor: 'orange',
                padding: 10,
                borderBottomWidth: 1,
              }}>
              <Text style={{fontSize: 10, backgroundColor: 'orange'}}>
                Id:{item.id}
              </Text>
              <Text style={{fontSize: 10}}>Title:{item.title}</Text>
              <Text style={{fontSize: 10}}>Body:{item.body}</Text>
            </View>
          )}
        />
      ) : (
        <Text>No Data</Text>
      )}
    </View>
  );
};

export default FlatList1;
