import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  ImageBackground,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export default class App extends Component {
  render() {
    return (
      <View style={styles.conteiner}>        
            <Image source={require('./background/kargo-icon.png')  } style={styles.Image}/>
        <TouchableOpacity style={styles.buttonConteiner}
          onPress={() => { this.props.navigation.navigate('LoginPage') }}>
         <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonConteiner}
          onPress={() => { this.props.navigation.navigate('SignPage') }}
        >
          <Text style={styles.buttonText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputIcon:{
    width:20,
    height:20,
    marginLeft:15,
    
  },
  input: {
    height: 40,
    backgroundColor: '#CCC',
    marginBottom: 10,
    paddingHorizontal: 20
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonConteiner: {
    
    marginTop: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#3498BD',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '700'
  },
  Image: {
    display: 'flex',
    marginTop: '5%',
    marginLeft: '35%',
    height: 100,
    width: 100,
    marginBottom: 10,
  },

});

