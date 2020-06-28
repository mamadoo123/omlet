import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryItem from '../components/CategoryItem'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {HeaderBtn} from '../components/HeaderBtn'

const CategoriesScreen = props => {

  const renderItem = itemData =>{
    const handlePress = () => props.navigation.navigate({
      routeName:'CategoryMeals',
      params:{categoryId: itemData.item.id}
      })
  
    return(
      <CategoryItem 
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={handlePress}
      />
    )
  }

  return(
      <FlatList 
        numColumns={2}
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
  )
}
CategoriesScreen.navigationOptions = navData => {
  return{
    headerTitle:'Meal Categories',
    headerLeft: () => {
      return(
      <HeaderButtons HeaderButtonComponent={HeaderBtn}>
        <Item 
          title="menu"
          iconName="ios-menu" 
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
      )
    }
  }
}

export default CategoriesScreen

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  }
})