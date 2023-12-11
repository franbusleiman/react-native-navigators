import { createDrawerNavigator } from '@react-navigation/drawer';
import { Settings } from '../screens/Settings';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator= ()=> {
  return (
    <Drawer.Navigator
    screenOptions={{
        headerShown: false
    }}>
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Stack" component={StackNavigator}  options={{ drawerLabel: () => null }}/>

    </Drawer.Navigator>
  );
}