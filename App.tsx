import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigators/DrawerNavigator';
import { AuthProvider } from './src/context/AuthContext';



export default function App() {
  return (
    <NavigationContainer>
      <AppState>
        <DrawerNavigator />
      </AppState>
    </NavigationContainer>
  );
}


 const AppState = ({ children }: any) => {
  return <AuthProvider>
    {children}
  </AuthProvider>
}