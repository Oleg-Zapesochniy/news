import React, {useState} from 'react';
import { StyleSheet,  View, Text} from 'react-native';
import {gStyle} from './styles/style';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
// import Main from './components/Main';
// import Compontents from './components/Contacts';
import MainStack from './navigate';


const fonts = () => Font.loadAsync({
  GrapeNuts: require('./assets/fonts/GrapeNuts.ttf')
});

export default  function App() {
  const [font, setFont] = useState(false);
  if(font) {

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Open to   on your app!</Text>
      {/* <Main /> */}
      <MainStack />
    </View>
  );
} else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={()=> setFont(true)}
        onError={console.warn}  
       />
    );
  }
}

const styles = StyleSheet.create({
  
});
``