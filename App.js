import React, { useState } from 'react';
import { StyleSheet} from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo';
import MealNavigator from './navis/MealNavigator';
import { enableScreens } from 'react-native-screens';
import { combineReducers, createStore } from 'redux';
import mealReducer from './store/reducers/mealsReducer';
import { Provider } from 'react-redux';

// Using redux
// Root Reducer
const rootReducer = combineReducers({
  meals: mealReducer
})

// Store
const store = createStore(rootReducer)


enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if(!fontLoaded){
    return(
      <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)}/>
    )
  }

  return (
    <Provider store={store}><MealNavigator /></Provider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
