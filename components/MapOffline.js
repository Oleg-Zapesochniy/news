import React from "react";
import { StyleSheet, View, Text, Image} from "react-native";
import { gStyle } from "../styles/style";
import Map from 'react-offline-map';
import opz from '../images/opz.jpg';



export default function MapOffline() {
  const images =[
    {'url' : opz,
      'topLat': 35.184619089603586,
      'topLng': -116.19619200291318,
      'bottomLat': 35.173016651002655,
      'bottomLng': -116.18129480877964}
  ]
  return (
    
    <View>
      {/* <Text>Here is text</Text> */}
      <Map width={800} height={600} images={images}
       initialPos ={{'lat': 35.17, 'lng': -116.18, 'zoom': 5000}} />
    </View>
  );
}
