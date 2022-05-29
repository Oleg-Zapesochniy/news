import React , {useState} from 'react';
import { StyleSheet,  View, Text, TouchableOpacity, FlatList, Button, Image, Modal} from 'react-native';
import {gStyle} from '../styles/style';
import { Ionicons } from '@expo/vector-icons';
import Form from './Form';

export default  function Main( { navigation }) { // указать navigation
  
  const loadScene = () =>{
    navigation.navigate('Contacts')  //переадр по ИМЕНИ
  }
  const loadMapPage = () =>{
    navigation.navigate('MapOffline')
  }

  const  [news, setNews] = useState([  // это массив
    {name:'Google', anons:'Googdfd!!!!!', full:'Good Google', key:'1', img:'https://sinst.fwdcdn.com/img/weatherImg/b/d100.jpg' },
    {name:'Yandex', anons:'Яндека@!!!!!!!', full:'Гвно Google', key:'2' , img:'https://news.liga.net/images/general/2022/05/20/thumbnail-tw-20220520100833-5932.jpg?v=1653030617'},
    {name:'Ukraine', anons:'War in Ulraine@!!!!!!!', full:'Is s badgle', key:'3', img:'https://news.liga.net/images/general/2022/05/19/thumbnail-tw-20220519172158-6551.jpg?v=1652970222' }
  ])
  
  const [modalWindow, setModalWindow] = useState(false); // состояние модального окна через setState
const addArticle = (article) => {
  setNews((list) => {
    article.key = Math.random().toString();
    return [
      article,...list
    ]
  });
  setModalWindow(false);
}
const handleNavigateTo = (item) => navigation.navigate('FullInfo', item);
const RenderItem = ({item}) => (   // лист прокрутки,?
  <TouchableOpacity onPress={handleNavigateTo}>
    <Image source={{
        width:'100%',
        height:100,
        uri: item.img
      }} 
    />
    <Text style={styles.title} >{ item.name }</Text>
    <Text>{ item.anons }</Text>
  </TouchableOpacity>
)

  return (
    <View style={gStyle.main}>
      <Modal visible={modalWindow}>
        <View style={gStyle.main}>
          <Ionicons name="close-circle" size={24} color="red" style={styles.iconClose} onPress={()=>setModalWindow(false)} />
          <Text style={gStyle.title}>Форма добавления статьи</Text>
          <Form addArticle ={addArticle}/>
        </View>
      </Modal>
      <Button title={'Контакты'} onPress={loadScene} />
      <Button title={'Карта'} onPress={loadMapPage} styles={styles.button} /> // styles не работ
      <Ionicons name="add-circle" size={24} color="red" style={styles.iconAdd} onPress={()=> setModalWindow(true)}/>
      <Text style={"gStyle.title, styles.header"}>Main page</Text>
      <FlatList data={news} renderItem={RenderItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    margin:20,
    backgroundColor: 'yellow'
  },
  iconAdd: {
    textAlign:'center',
    marginBottom:15
  },
  iconClose: {
    textAlign:'center',
      },
  image: {
    width:100,
    height:50
  },
  header:{
    marginBottom:30
  },
  
  item: {
    width: '100%',
    marginBottom:30,

  },
  title:{
    fontSize:34,
    textAlign: 'center',
    marginTop: 20,
    color: '#48f'
  }
});
``