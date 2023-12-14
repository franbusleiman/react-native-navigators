import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigators/DrawerNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import ThemeProvider from './ThemeProvider';


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db', // color primario
    accent: '#f1c40f', // color de acento
    background: '#ecf0f1', // color de fondo
    text: '#2c3e50', // color del texto
  },
};
export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <AppState>
          <DrawerNavigator />
        </AppState>
      </NavigationContainer>
    </PaperProvider>
    );
}


      const AppState = ({children}: any) => {
  return <AuthProvider>
        {children}
      </AuthProvider>
}