import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AnOtherTab } from '../screens/AnOtherScreen';
import { StackNavigator } from './StackNavigator';
import { Icon } from 'react-native-paper';


const Tab = createMaterialBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Tab.Navigator
            labeled={false}

        >
            <Tab.Screen name="Stack" component={StackNavigator} options={{ tabBarIcon: ({ color }) => <Icon source="map" size={30} color={color} /> }} />
            <Tab.Screen name="AnOtherTab" component={AnOtherTab} options={{ tabBarIcon: ({ color }) => <Icon source="account-hard-hat" size={30} color={color} /> }} />

        </Tab.Navigator>
    );
}