import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { gStyle } from "../styles/style";
import { NavigationContainer } from "@react-navigation/native";

export default function Contacts({ navigation }) { // указать navigation
  // const loadScene = () => navigation.goBack(); //  а это назад есть метод в navigation

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>About them</Text>
      {/* <Button title={"openpage"} onPress={loadScene} /> */}
    </View>
  );
}

// const styles = StyleSheet.create({

// });
// ``
