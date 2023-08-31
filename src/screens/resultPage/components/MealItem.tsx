import React, { useEffect } from 'react';
import {Text, View,  StyleSheet, ImageBackground} from 'react-native';
import HeartIcon from '../../../assets/icons/Mini.svg'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';



export const MealItem  = ({item}) => {
  console.log("item",item)
  const navigation = useNavigation();
  
  const handleIngredient =  () => {
    
  navigation.navigate('Ingredients', {idMeal: item.idMeal})
  };

  
  return (
          <View style={styles.item}>
           <ImageBackground
          source={{uri:item.strMealThumb}}
          style={styles.image} />
          {/* <TouchableOpacity style={styles.addButton} onPress={handleFavorites} > */}
             <HeartIcon style={styles.icon}/>
          {/* </TouchableOpacity> */}
           
          <Text style={styles.nameText}>{item.strMeal}</Text>
         <TouchableOpacity style={styles.button} onPress={handleIngredient} >
          <Text>{"View recipe>"}</Text>
         </TouchableOpacity>
        </View>
       
    
  );
 
};

const styles = StyleSheet.create({
  nameText: {
    width: 110,
    height: 90,
    color: '#272D2F',
    fontSize: 18,
    alignSelf: 'center',
    marginLeft: 15,

  },
  item: {
    width: 156,
    height: 260,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    marginLeft: 20,
    marginVertical: 20,
    justifyContent: 'space-around',
  },
  image: {
    width: 130,
    height: 130,
    marginHorizontal: 15,
   
  },
  icon: {
    width: 13, 
    height: 13,
    marginVertical: 20,
    marginLeft: 10
    
  },
  button: {
    backgroundColor: '#FFFFFF',
    width: 82,
    height: 30,
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 11
  },
  addButton: {
    marginLeft: 13,
    marginVertical: 25,
    position: 'absolute'
  }
})
