import { createDrawerNavigator } from '@react-navigation/drawer';
import { Settings } from '../screens/Settings';
import { BottomTab } from './BottomTab';

const Drawer = createDrawerNavigator();

export const DrawerNavigator= ()=> {
  return (
    <Drawer.Navigator
    screenOptions={{
        headerShown: false
    }}>

<Drawer.Screen name="BottomTab" component={BottomTab} options={{ drawerLabel: () => null }}/>
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}