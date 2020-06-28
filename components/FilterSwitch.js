import React from 'react'
import { View, Text, Switch, Platform, StyleSheet } from 'react-native'
import colors from '../constants/colors'

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        value={props.value}
        onValueChange={props.onValueChange}
        trackColor={{true: colors.primary}}
        thumbColor={Platform.OS === 'android'? colors.primary: ''}
      />
    </View>
  )
}

export default FilterSwitch

const styles = StyleSheet.create({
  filterContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width: '80%',
    marginVertical: 15
  },
})