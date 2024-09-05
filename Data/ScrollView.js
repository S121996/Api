import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

const ScrollView1 = () => {
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
      <Text style={{ fontSize: 30 }}>App Call</Text>
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
                Title: {item.title}
              </Text>
              <Text style={{ fontSize: 20 }}>Body: {item.body}</Text>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text>No Data</Text>
      )}
    </View>
  );
};

export default ScrollView1;
