import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigators/DrawerNavigator';



export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
      </NavigationContainer>
  );
}