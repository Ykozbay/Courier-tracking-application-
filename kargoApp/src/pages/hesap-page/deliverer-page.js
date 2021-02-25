import React from "react";
import { View, Text, Alert, Modal, Image, ImageBackground, TouchableHighlight, Button, TouchableOpacity, StyleSheet} from "react-native";
import ModalCard from "../shared/ModaldCard";
import ListCard from "../shared/ListdCard";
import { ScrollView } from "react-native-gesture-handler";


export default class Detail extends React.Component {
  gdcardlist=[];
  justdClicked = "0";
  justdModal ="0";
  isdData = "0";
  ddata=[];
  state = {
    modalVisible: false,
  };
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  Teslim =  async () => {
    try {
      const response = await fetch('http://192.168.1.38/reactapp/Deleteproduct.php?code='+global.ddata.veri[1].productCode+'&location='+global.ddata.veri[1].productLocation+'&shortLocation='+global.ddata.veri[1].shortLocation, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      }, 
      });
      alert("Kargo Teslim Edildi")
      this.setState({ state: this.state });
      }
    catch (error) { 
      console.error(error);  
    }
  }; 

  Listele = async () => {
    try { 
      const response = await fetch('http://192.168.1.38/reactapp/Delivererpage.php ', {
        method: 'GET', 
        headers: { 
          Accept: 'application/json',
          'Content-Type': 'application/json',
      }, 
      });
      responseData = await response.json();
      if(responseData==0)
      {
        this.setState({ state: this.state }); 
        global.isdData=0;
      }
      else
      {
      global.isdData=1;
      global.ddata= {veri:responseData}
      await this.addCartItems();
      global.justdClicked = 0  
      }
    } catch (error) {
      console.error(error);
    }
  };  
  addCartItems(){
    this.setState({ state: this.state });  
    global.gdcardlist=[];
    var carddLists=[];  
    for(let i = 1; i <= global.ddata.veri[0]; i++) 
    {
      carddLists.push(
        <ListCard key={i} onPress={() => {this.setModalVisible(true);global.justdModal=i;}}/>
      )
    }
    global.gdcardlist = carddLists
  }

  render() {
    
    this.Listele();
 
 
    const { modalVisible } = this.state;
    if(global.isdData==1)
    {
    return (
      <ImageBackground 
        source={require("../../images/back2.png")}
        style={{ height: "100%", width: "100%" }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 40,
            alignItems: "center",
            paddingHorizontal: 40,
          }}
        >
        </View>

        <View
          style={{
            width: "100%",
            marginTop: 50,
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        > 
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              backgroundColor: "#5facdb",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../background/kargo.png")}
              style={{ height: 26, width: 26 }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 40,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontFamily: "RobotoBold",
              color: "#FFF",
            }}
          >
          { global.ddata.veri[1].startShortLocation }
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "#a2a2db",
              paddingHorizontal: 15,
            }}
          >
            - - - - - - - - - - - - - - - - - 
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: "RobotoBold",
              color: "#FFF",
            }}
          >
          {global.ddata.veri[1].shortLocation}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 40,
          }}
        >
          <Text
            style={{
              color: "#a2a2db",
              fontFamily: "RobotoRegular",
            }}
          >
            {global.ddata.veri[1].productStartLocation}
          </Text>
          <Text
            style={{
              color: "#a2a2db",
              fontFamily: "RobotoRegular",
              paddingLeft: 162,
            }}
          >
            {"           "} {global.ddata.veri[1].productLocation}
          </Text>
        </View>
        <View style={{
                   flexDirection:"row",
                   marginTop:1,
                   alignItems:"center"
               }}>
        <Text
          style={{
            paddingHorizontal: 40,
            color: "#a2a2db",
            fontFamily: "RobotoRegular",
          }}
        >
          Kargonuz Yolda
        </Text>
        <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "#a2a2db",
              paddingLeft: 110,
            }}
          >
        <TouchableOpacity onPress={() => {this.Teslim()}}>
          <Text >Teslim Et</Text>
        </TouchableOpacity>
        </Text>
               </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 50,
            marginTop: 60,
          }}
        >
          <Image
            source={require("../../images/dots.png")}
            style={{ width: 18, height: 16 }}
          />
          <Image
            source={require("../../images/filter.png")}
            style={{ marginLeft: 228, width: 20, height: 18 }}
          />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginVertical: 5,
          }}
        >
          {global.gdcardlist}

          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal Kapandı");
              }}
            >
              <ModalCard
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              />
            </Modal>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
  else
  {
    return ( 
      <ImageBackground
        source={require("../../images/back2.png")}
        style={{ height: "100%", width: "100%" }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 40,
            alignItems: "center",
            paddingHorizontal: 40,
          }}
        >
        </View>

        <View
          style={{
            width: "100%",
            marginTop: 50,
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              backgroundColor: "#5facdb",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../background/kargo.png")}
              style={{ height: 26, width: 26 }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 40,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontFamily: "RobotoBold",
              color: "#FFF",
            }}
          >
          {""}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "#a2a2db",
              paddingHorizontal: 15,
            }}
          >
            - - - - - - - - - - - - - - - - - - - - - - - 
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: "RobotoBold",
              color: "#FFF",
            }}
          >
          {""}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 40,
          }}
        >
          <Text
            style={{
              color: "#a2a2db",
              fontFamily: "RobotoRegular",
            }}
          >
            {""}
          </Text>
          <Text
            style={{
              color: "#a2a2db",
              fontFamily: "RobotoRegular",
              paddingLeft: 162,
            }}
          >
            {""}
          </Text>
        </View>
        <Text
          style={{
            paddingHorizontal: 40,
            color: "#a2a2db",
            fontFamily: "RobotoRegular",
          }}
        >
          Herhangi Bir Kargonuz Bulunmamaktadır.
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 50,
            marginTop: 60,
          }}
        >
          <Image
            source={require("../../images/dots.png")}
            style={{ width: 18, height: 16 }}
          />
          <Image
            source={require("../../images/filter.png")}
            style={{ marginLeft: 228, width: 20, height: 18 }}
          />
        </View>
      </ImageBackground>
    );
  }
  }
}
