import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class ListCard extends React.Component {
  card(){
    global.justdClicked +=1
  }

  render() {
    this.card()
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          paddingHorizontal: 32,
          alignSelf: "center",
          marginTop: 20,
          backgroundColor: "#FFF",
          height: 182,
          elevation: 1,
          width: 270,
          borderRadius: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingTop: 20,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoBold",
              color: "#4b3ca7",
              fontSize: 20,
            }}
          >
          { global.ddata.veri[global.justdClicked].startShortLocation }
          </Text>

          <Text
            style={{
              fontSize: 20,
              color: "#a2a2db",
              paddingHorizontal: 14,
            }}
          >
            {" "}
            - - - - - - - - - -
          </Text>
          <Text
            style={{
              fontFamily: "RobotoBold",
              color: "#4b3ca7",
              fontSize: 20,
            }}
          >
            {global.ddata.veri[global.justdClicked].shortLocation}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: -5,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "#a2a2db",
              fontSize: 11,
            }}
          >
            {global.ddata.veri[global.justdClicked].productStartLocation}
          </Text>
          <Text
            style={{
              fontSize: 11,
              fontFamily: "RobotoRegular",
              color: "#a2a2db",
              paddingLeft: 112,
            }}
          >
            {"     "}{global.ddata.veri[global.justdClicked].productLocation}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "#522289",
              fontSize: 16,
            }}
          >
            Konum {"    "}
          </Text>

          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "#522289",
              paddingLeft: 70,
              fontSize: 16,
            }}
          >
            {"     "}Varış
          </Text>
        </View>

        <Text
          style={{
            fontFamily: "RobotoRegular",
            color: "#a2a2db",
            fontSize: 12,
          }}
        >
          Kargo Yolda
        </Text>

        <Text
          style={{
            fontSize: 17,
            marginRight: -5,
            marginVertical: 8,
            color: "#a2a2db",
          }}
        >
          - - - - - - - - - - - - - - - - - - - - - - -
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginTop: -8,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "#522289",
              fontSize: 16,
            }}
          >
            Fiyat:{"          "}
          </Text>
          <Text
            style={{
              fontFamily: "RobotoBold",
              color: "#4b3ca7",
              paddingLeft: 75,
              fontSize: 16,
            }}
          >
            {global.ddata.veri[global.justdClicked].productPrice}₺
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
