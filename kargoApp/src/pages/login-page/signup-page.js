import React, { Component } from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Alert
} from "react-native";

export default class SignUp extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        isim: {
          type: "generic",
          value: ""
        },
        parola: {
          type: "generic",
          value: ""
        },
        telefon: {
          type: "phone",
          value: ""
        },
        tcKimlik:{
          type: "generic",
          value: ""
        },
        isim: '',
        parola: '',
        telefon: '',
        tcNo: '',
      }     
    };
    this.submit = this.submit.bind(this);
    this.kayıtOl = this.kayıtOl.bind(this);
    
  }
  onClickListener = (viewId) => {
    Alert.alert("Uyarı", "Butona Basıldı "+viewId);
  }
  kayıtOl() {
    
    fetch('http://192.168.1.38/reactapp/register.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isim: this.state.isim,
        parola: this.state.parola,
        telefon: this.state.telefon,
        tcNo: this.state.tcNo,
      })
    }).then((response) => response.json())
      .then((responseData) => {
        Alert.alert("Çıktı:", responseData)
        this.props.navigation.navigate('LoginPage');
      })
      .catch((error) => {
        console.error(error);
      })
  }

  submit() {
  }

  renderError(id) {
    const { inputs } = this.state;
    if (inputs[id].errorLabel) {
      return <Text style={styles.error}>{inputs[id].errorLabel}</Text>;
    }
    return null;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}> 
        <Image style={styles.inputIcon} source={require('../../../background/identity.png')  }/>
            <TextInput style={styles.inputs}
              placeholder="TcNo"
            keyboardType = "numeric"
              style={styles.input}
              maxLength={11}
              onChangeText={value => {
                this.onInputChange({ id: "tcKimlik", value });
              },(tcNo) => this.setState({tcNo})}
            />
            {this.renderError("tcKimlik")}
          </View>
          <View style={styles.inputContainer}> 
          <Image style={styles.inputIcon} source={require('../../../background/User.png')  }/>
            <TextInput
              placeholder="İsim"
              style={styles.input}
              maxLength={30}
              onChangeText={value => {
                this.onInputChange({ id: "isim", value });
              },(isim) => this.setState({isim})}
            />
            {this.renderError("isim")}
          </View>


          <View style={styles.inputContainer}> 
          <Image style={styles.inputIcon} source={require('../../../background/phone.png')  }/>
            <TextInput
              placeholder="Telefon"
              keyboardType="numeric"
              style={styles.input}
              maxLength={11}
              onChangeText={value => {
                this.onInputChange({ id: "telefon", value });
              },(telefon) => this.setState({telefon})}
            />
            {this.renderError("telefon")}
          </View>
          <View style={styles.inputContainer}> 
          <Image style={styles.inputIcon} source={require('../../../background/password.png')  }/>
            <TextInput
              placeholder="Parola"
              maxLength={16}
              secureTextEntry={true}
              style={styles.input}
              onChangeText={value => {
                this.onInputChange({ id: "parola", value });
              },(parola) => this.setState({parola})}
            />
            {this.renderError("parola")}
          </View>

            <View>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.kayıtOl.bind(this)}>
            <Text style={styles.loginText}>Kayıt Ol</Text>
        </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => { this.props.navigation.navigate('App') }}>
            <Text style={styles.loginText}>Ana Sayfa</Text>
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