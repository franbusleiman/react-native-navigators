import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1} from '../screens/Pagina1';
import { Pagina2} from '../screens/Pagina2';
import { Pagina3} from '../screens/Pagina3';
import { useTheme } from 'react-native-paper';


export type StackProps = {
    Pagina1: undefined,
    Pagina2: {"name" :string},
    Pagina3: undefined
}


const Stack = createStackNavigator<StackProps>();




export const StackNavigator = ()=>  {

  return (
    <Stack.Navigator
    screenOptions={
        {
            headerShown: false, 
        
          }}
        >
          
      <Stack.Screen name="Pagina1" component={Pagina1} />
      <Stack.Screen name="Pagina2" component={Pagina2} />
      <Stack.Screen name="Pagina3" component={Pagina3} />
    </Stack.Navigator>
  );
}