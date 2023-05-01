import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from './components/LoginForm';
import { StyleSheet, Text, View } from 'react-native';
import { LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HomePage from './components/HomePage';

LogBox.ignoreLogs(['Warning: ...']);

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
