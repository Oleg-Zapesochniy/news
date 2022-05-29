import React from 'react';
import { StyleSheet,  View, TextInput,Button} from 'react-native';
import {gStyle} from '../styles/style';
import {Formik} from 'formik'

export default function Form( {addArticle} ){
    
    const handleSubmit = (values, action)=> {
        console.log(values);
       addArticle(values);
       action.resetForml();
    
    };
     return(
         <View>
             <Formik initialValues={{name:'',anons:'',full:'', img:''}} onSubmit={handleSubmit}>
                 {(props)=>(
                     <View>
                         <TextInput 
                            value={props.values.name} 
                            placeholder='Название статьи' 
                            onChangeText={props.handleChange('name')}
                            style={styles.input} />
                           
                         <TextInput 
                            value={props.values.anons} 
                            placeholder='анонс' 
                            onChangeText={props.handleChange('anons')}
                            style={styles.input} />
                            
                         <TextInput 
                            value={props.values.full} 
                            multiline
                            placeholder='Введите статью' 
                            onChangeText={props.handleChange('full')}
                            style={styles.input} />
                         
                         <TextInput 
                            value={props.values.img} 
                            placeholder='Укажите фото' 
                            onChangeText={props.handleChange('img')}
                            style={styles.input} />
                        
                        <Button onPress={props.handleSubmit} title={'добавить'} />
                     </View>
                 )}
             </Formik>
         </View>
     );
  }

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        padding:10,
        borderColor: 'silver',
        borderRadius:3,
        marginTop:15
    }
  
});
``