import React from "react";
import { StyleSheet, View, Text, Image} from "react-native";
import { gStyle } from "../styles/style";
import { NavigationContainer } from "@react-navigation/native";

export default function FullInfo ({ route }) { // указать route в автомате компонент navigator;a

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text style={gStyle.title}>{route.params.full}</Text>
      <Image source={
            {
            width:'100%',
            height:150,
            uri: route.params.img
          }
      }/>
    </View>
  );
}
