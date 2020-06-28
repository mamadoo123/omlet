import React from 'react'
import { CATEGORIES} from '../data/dummy-data'
import MealList from '../components/MealList'
import { connect } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import DefaultText from '../components/DefaultText'

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam('categoryId')
  const categoryMeals = props.meals.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

  if(categoryMeals.length === 0){
    return(
      <View style={styles.content}>
        <DefaultText>There is no meals. let's remoce some restrictions or filters</DefaultText>
      </View>
    )
  }
  return(
    <MealList meals={categoryMeals} navigation = {props.navigation}/>
  )
}

CategoryMealsScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(category => category.id === categoryId)

  return {headerTitle: selectedCategory.title}
}


const mapStateToProps = state => ({
  meals: state.meals.filteredMeals
})

export default connect(mapStateToProps)(CategoryMealsScreen)


const styles = StyleSheet.create({
  content:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  }
})

