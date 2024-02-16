import { View, 
  Text, 
  TextInput, 
  Image, 
  ScrollView, 
  StyleSheet,
} from 'react-native';
import React from 'react'

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.h}>
         <Text style={styles.th}>Basic Components RN</Text>
      </View>
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://designdrizzle.com/wp-content/uploads/Coder.png' }}
          style={styles.image2}
        />
        <Text style={styles.contentText}>Ask me a question!</Text>
        <TextInput
          placeholder='Enter a question...'
          style={styles.input}
        />
        <Image
          source={require('./assets/gambar.jpg')}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.text}>Mobile App Development</Text>
      </View>
    </ScrollView>
  );s
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor:'lightsalmon',
    padding: 20,
  },
  h: {
    alignItems: 'center',
    marginBottom: 15,
  },
  th: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'black',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 18,
    marginBottom: 16,
    color:'black',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius:6,
    marginBottom: 16,
    paddingLeft: 10,
    width: '80%', 
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 16,
  },
  image2: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: -65,
    marginBottom: 20,
  },
  text:{
    textAlign: 'center',
    color:'black',
    fontSize: 15,
  },
});

export default App;
