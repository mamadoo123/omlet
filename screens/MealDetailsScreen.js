import React, { useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderBtn from '../components/HeaderBtn'
import DefaultText from '../components/DefaultText'
import ListItem from '../components/ListItem'
import { useSelector, useDispatch } from 'react-redux'
import { toggleFavorite } from '../store/actions/mealsAction'

const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam('mealId')
  const meals = useSelector(state=> state.meals.meals)
  const selectedMeal = meals.find(meal => meal.id === mealId)
  const isFav = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId))
  
  useEffect(()=> {
    props.navigation.setParams({isFavMeal: isFav})
  },[isFav])

  const dispatch  = useDispatch()

  const toggleFavoriteHandler = useCallback(()=> {
    dispatch(toggleFavorite(mealId))
  },[dispatch, mealId])

  useEffect(()=> {
    // props.navigation.setParams({mealTitle: selectedMeal.title})
    props.navigation.setParams({toggleFav: toggleFavoriteHandler})
  }, [toggleFavoriteHandler])

  return(
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
      <View style={styles.mealDetail}>
        <DefaultText>{selectedMeal.duration} min</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((item, index) => (
        <ListItem key={index}>{index + 1} - {item}</ListItem>
      ))}
    </ScrollView>
  )
}

MealDetailsScreen.navigationOptions = (navigationData) => {
  return{
    headerTitle: navigationData.navigation.getParam('mealTitle'),
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderBtn}>
      <Item
        title="favorite" 
        iconName={navigationData.navigation.getParam('isFavMeal')? "ios-star":"ios-star-outline"}
        onPress={navigationData.navigation.getParam('toggleFav')}
      />
    </HeaderButtons>
    )
  }
}

export default MealDetailsScreen

const styles = StyleSheet.create({
  image:{
    width: '100%',
    height: 200
  },
  mealDetail:{
    flexDirection:'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title:{
    fontFamily:'open-sans-bold',
    fontSize: 18,
    textAlign:'center'
  }
})