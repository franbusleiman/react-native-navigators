import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StackNavigator } from './StackNavigator';
import { AnOtherTab } from '../screens/AnOtherScreen';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createMaterialBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Tab.Navigator
            activeColor="red"
            barStyle={{
                backgroundColor: 'white'
            }}
            labeled={false}
        
                    >
            <Tab.Screen name="Stack" component={StackNavigator}  options={{ tabBarIcon: ({ color }) => <Icon name="file-tray-stacked-outline" size={30} color={color} /> }} />
            <Tab.Screen name="AnOtherTab" component={AnOtherTab} options={{ tabBarIcon: ({ color }) => <Icon name="diamond-outline" size={30} color={color} /> }} />

        </Tab.Navigator>
    );
}