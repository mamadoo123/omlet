import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import FavouritesScreen from '../screens/FavouritesScreen'
import FilterScreen from '../screens/FilterScreen'
import colors from '../constants/colors'
import { Platform, Text } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

const defaultNavigationOptions = {
  headerStyle:{
    backgroundColor:Platform.OS === 'android' ? colors.primary : ''
  },
  headerTitleStyle:{
    fontFamily: 'open-sans'
  },
  headerBackTiltStyle:{
    fontFamily:'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary
} 
// ======Creating Stack Navigator For Meals Screen==========
const MealNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {screen: CategoryMealsScreen},
  MealDetail: MealDetailsScreen
},{defaultNavigationOptions})

// ===========creating the Favourite Stack ===========
const FavNavigator = createStackNavigator({
  Favourites: FavouritesScreen,
  MealDetail: MealDetailsScreen
}, {defaultNavigationOptions}) 
// adding common configurations to tab navigator : which contain {meals, fav} screen
const screenConfig = {
  Meals: {screen: MealNavigator, navigationOptions:{
    tabBarIcon: tabInfo => {
      return(
        <Ionicons name="ios-restaurant" color={tabInfo.tintColor} size={25} />
      )
    },
    tabBarLabel:Platform.OS === 'android' ? <Text style={{fontFamily:'open-sans-bold'}}>Meals</Text> : 'Meals'
  }},
  Favs: {screen: FavNavigator, navigationOptions:{
    tabBarIcon: tabInfo => (<Ionicons name="ios-star" color={tabInfo.tintColor} size={25}/>),
    tabBarColor: colors.accent,
    tabBarLabel:Platform.OS === 'android' ? <Text style={{fontFamily:'open-sans-bold'}}>Favorites</Text> : 'Favorites'
  }}
}


// =====creating tab navigator depending on the platform======
const MealsFavTabNavigator =Platform.OS === 'android' ? 
createMaterialBottomTabNavigator(screenConfig, {
  activeTintColor: colors.primary,
  shifting: true
}) : 
createBottomTabNavigator(screenConfig, {
  tabBarOptions: {
    activeTintColor: colors.accent,
    labelStyle:{
      fontFamily:'open-sans-bold'
    }
  }
})

// =====creating stack navgiator of the filters========

const FilterNavigator = createStackNavigator({
  Filters: FilterScreen
},{defaultNavigationOptions})
//=========Creating TheDrawer Navigator==========
const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavTabNavigator,
    drawerLabel: 'Meals'
 },
  Filters: FilterNavigator
}, {
  contentOptions: {
    activeTintColor: colors.accent,
    labelStyle:{
      fontFamily: 'open-sans-bold'
    }
  }
})
export default createAppContainer(MainNavigator)


//===========Error: Report during installation==========
// npm install react-navigation@4x
// complete the installation from react-navigation Docs V4x
// also go to the next page to install react-navigation-stack
// Error: react-native missing
//==========Solution===========
// 1- Remove all node-modules Folder
// 2 run $yarn install
// 3- run $ expo start
// Done