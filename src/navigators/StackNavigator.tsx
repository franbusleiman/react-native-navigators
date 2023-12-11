import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1} from '../screens/Pagina1';
import { Pagina2} from '../screens/Pagina2';
import { Pagina3} from '../screens/Pagina3';


const Stack = createStackNavigator();


type StackProps = {
    Pagina1: undefined,
    Pagina2: {"name" :string},
    Pagina3: undefined
}

export const StackNavigator = ()=>  {
  return (
    <Stack.Navigator
    screenOptions={
        {
            headerShown: false, 

        }
    }   
    >
      <Stack.Screen name="pagina 1" component={Pagina1} />
      <Stack.Screen name="pagina 2" component={Pagina2} />
      <Stack.Screen name="pagina 3" component={Pagina3} />
    </Stack.Navigator>
  );
}