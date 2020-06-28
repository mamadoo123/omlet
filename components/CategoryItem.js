import React from 'react'
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native'

const CategoryItem = props => {
  return(
    <TouchableOpacity 
        style={{...styles.gridItem, backgroundColor: props.color}}
        onPress= {props.onPress}
      >
      <View style={styles.container}>
        <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  gridItem:{
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 5,
  },
  container:{
    flex: 1,
    justifyContent:'flex-end',
    alignItems: 'flex-end',
    shadowColor: 'black',
    shadowOffset:{width: 0, height: 2},
    shadowOpacity: 0.26,
    shadowRadius: 10,
    padding: 15,
  },
  title:{
    fontFamily:'open-sans-bold',
    fontSize: 18,
    textAlign:'right'
  }
})