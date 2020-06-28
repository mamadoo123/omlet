import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet,Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderBtn from '../components/HeaderBtn'
import FilterSwitch from '../components/FilterSwitch'
import { useDispatch } from 'react-redux'
import { setFilters } from '../store/actions/mealsAction'

const FilterScreen = props => {
  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false)
  
  const dispatch = useDispatch()
  // use callback to execute tyhe function only if one of the state changes
  const saveFilters = useCallback(() => (
    dispatch(setFilters({
      isGlutenFree, isLactoseFree, isVegan, isVegetarian
    }))), [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch])

  // use Effect executes only if saveFilters fn is called
  
  useEffect(() => {
    props.navigation.setParams({save: saveFilters})
  },[saveFilters] )

  return(
    <View style ={styles.screen}>
      <Text style={styles.title}>Available Filters/Restrictions</Text>
      <FilterSwitch 
        label="Gluten-free"
        value={isGlutenFree}
        onValueChange= {newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch 
        label="Lactose-free"
        value={isLactoseFree}
        onValueChange= {newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch 
        label="Vegan"
        value={isVegan}
        onValueChange= {newValue => setIsVegan(newValue)}
      />
      <FilterSwitch 
        label="Vegetarian"
        value={isVegetarian}
        onValueChange= {newValue => setIsVegetarian(newValue)}
      />
    </View>
  )
}

FilterScreen.navigationOptions = navData => {
  return{
    headerTitle: 'Filtered Meals',
    headerLeft: () => {
      return(
        <HeaderButtons HeaderButtonComponent={HeaderBtn}>
          <Item 
            title="menu"
            iconName="ios-menu"
            onPress = {()=> {
              navData.navigation.toggleDrawer()
            }}
          />
        </HeaderButtons>
      )
    },
    headerRight: () => {
      return(
        <HeaderButtons HeaderButtonComponent={HeaderBtn}>
          <Item 
            title="Save"
            iconName="ios-save"
            onPress = {()=> {
              navData.navigation.getParam('save')()
            }}
          />
        </HeaderButtons>
      )
    }
  }
}

export default FilterScreen

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    alignItems: 'center'
  },
  title:{
    fontFamily:'open-sans-bold',
    fontSize: 18,
    margin:20,
    textAlign:'center'
  }
})