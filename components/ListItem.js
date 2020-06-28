import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import DefaultText from './DefaultText'

const ListItem = props => {
 return(
   <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
   </View>
 )
}

export default ListItem

const styles = StyleSheet.create({
  listItem:{
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
})