import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
      müsteriNo: '',
      list: [],
    }
  }


  LogIn = async () => {
    var uname = this.state.email;
    var pword = this.state.password;
    if(uname== "" || pword=="")
    {
      Alert.alert("Alanları Boş Bırakmayınız");
    }
    else{
      try {
        const response = await fetch('http://192.168.1.38/reactapp/Login.php?identity='+uname+'&password='+pword, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }})
        responseData = await response.json()
        if (responseData.result == "user") {
          this.setState({müsteriNo: 'asd', sifre: ''});
          this.props.navigation.navigate('userpage');
        }
        else if(responseData.result == "deliverer"){
          this.props.navigation.navigate('delivererpage')
        }
        else{alert("Tc Kimlik numaranız ya da Sifreniz yanlış")}
          
        
      }
       catch (error) {
        console.error(error);
      }

    }
 };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('../../../background/User.png')  }/>
          <TextInput style={styles.inputs}
              placeholder="Kimlik Numaranız"
              keyboardType="url"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('../../../background/password.png')  }/>
          <TextInput style={styles.inputs}
              placeholder="parola"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.LogIn.bind(this)}>
          <Text style={styles.loginText}>Giriş</Text>
        </TouchableHighlight>
        
        

        <View>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => { this.props.navigation.navigate('SignPage') }}>
            <Text style={styles.loginText}>Kayıt Ol</Text>
        </TouchableHighlight>
        </View>
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
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});