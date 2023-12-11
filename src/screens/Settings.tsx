import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles";

import { StackScreenProps } from '@react-navigation/stack';
import { StackProps } from "../navigators/StackNavigator";



interface Props extends StackScreenProps<any, any>{};


export const Settings = ({navigation}: Props) => {

    return (
        <View style={styles.screenView}>

            <Text style={styles.screenText}>Settings</Text>

            
            <TouchableOpacity
                onPress={() => navigation.navigate('Stack', { screen: 'Profile' })}>
                <Text>Ir a pagina 1</Text>
            </TouchableOpacity>
        </View>
        
    );
}