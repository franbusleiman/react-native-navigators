import 'react-native-gesture-handler';
import * as React from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native'; 
import { DrawerNavigator } from './src/navigators/DrawerNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { MD3DarkTheme,  PaperProvider, adaptNavigationTheme } from 'react-native-paper';


const { DarkTheme } = adaptNavigationTheme({
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
    text: 'white'
  }
};


export default function App() {

  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <NavigationContainer theme={CombinedDarkTheme}>
        <AppState>
          <DrawerNavigator />
        </AppState>
      </NavigationContainer>
    </PaperProvider>
  );
}

const AppState = ({ children }: any) => {
  return <AuthProvider>
    {children}
  </AuthProvider>
}