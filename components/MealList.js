import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import MealItem from './MealItem'
import { useSelector } from 'react-redux'

const MealList = props => {
  // You Cannot Use useSelector inside a nested function
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
  const renderMealItem = itemData => (
    <MealItem 
      title={itemData.item.title}
      onPress={()=>{
        props.navigation.navigate({
          routeName: 'MealDetail',
          params:{
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
            isFavMeal: favoriteMeals.some(meal => meal.id === itemData.item.id)
          }
        })
      }}
      duration={itemData.item.duration}
      complexity = {itemData.item.complexity}
      affordability = {itemData.item.affordability}
      image={itemData.item.imageUrl}
    />
    )

  return(
    <View style ={styles.list}>
      <FlatList 
        keyExtractor = {item => item.id}
        data = {props.meals}
        renderItem = {renderMealItem}
        style={{width:'100%'}}
      />
    </View>
  )
}

export default MealList

const styles = StyleSheet.create({
  list:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    padding: 10
  }
})