import React from 'react';
import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const App = () => {
  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.th}>Welcome</Text>
      </View>
      <ScrollView>
        <View style={styles.u}>
          <Text style={styles.username}> Username </Text>
        </View>
        <TextInput
          placeholder='Masukkan username anda'
          style={styles.input}
        />
        <View style={styles.p}>
          <Text style={styles.pass}> Password </Text>
        </View>
        <TextInput
          placeholder='Masukkan password anda'
          style={styles.input2}
        />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.s}>Sign In</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  header:{
    marginBottom:50,
    marginTop:25,
    marginLeft:10,
  },
  th:{
    fontSize:35,
    fontWeight:'bold',
    color:'black'
  },
  u:{
    marginBottom:6,
  },
  username:{
    fontWeight:'bold',
    marginLeft:4,
    fontSize:20,
    color:'grey',
  },
  p:{
    marginBottom:6,
  },
  pass:{
    fontWeight:'bold',
    fontSize:20,
    marginLeft:4,
    color:'grey',
  },
  input:{
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius:10,
    marginBottom: 16,
    marginLeft:9,
    paddingLeft: 10,
    width: '95%', 
    
  },
  input2:{
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius:10,
    marginBottom: 16,
    marginLeft:9,
    paddingLeft: 10,
    width: '95%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'darkorange',
    padding: 10,
    marginTop:30,
    width:'95%',
    height: 50,
    borderRadius:15,
    marginLeft:9,
  },
  s:{
    paddingTop:4,
    color:'white',
  },
});

export default App;