import React from 'react'
import MealList from '../components/MealList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderBtn from '../components/HeaderBtn'
import { useSelector } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import DefaultText from '../components/DefaultText'

const FavouritesScreen = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

  //If no favorites are added render an alternative text instead
  if(favoriteMeals.length === 0){
    return(
      <View style={styles.content}>
        <DefaultText>There is no favorites. let's add some</DefaultText>
      </View>
    )
  }
  return(
    <MealList meals = {favoriteMeals} navigation = {props.navigation}/>
  )
}

FavouritesScreen.navigationOptions =navData =>{ 
  return{
    headerTitle: 'You Favourites',
    headerLeft:() =>  (<HeaderButtons HeaderButtonComponent={HeaderBtn}>
      <Item 
        title="menu" 
        iconName="ios-menu" 
        onPress={()=> {
          navData.navigation.toggleDrawer()
        }}
      />
    </HeaderButtons>
    )
  }
}
export default FavouritesScreen

const styles = StyleSheet.create({
  content:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  }
})
