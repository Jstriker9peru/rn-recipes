import 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from './constants/Colors';
import RecipeScreen from './screens/RecipeScreen';
import CategoryScreen from './screens/CategoryScreen';

const Stack = createStackNavigator();

const defaultStackNavOptions = {
  headerStyle: {
      backgroundColor: Colors.primaryColor,
  },
  headerTitleStyle: {
      color: Colors.white
  }
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultStackNavOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Recipe" component={RecipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
