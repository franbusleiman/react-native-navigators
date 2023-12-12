import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles";

import { StackScreenProps } from '@react-navigation/stack';



interface Props extends StackScreenProps<any, any>{};


export const Settings = ({navigation}: Props) => {

    return (
        <View style={styles.screenView}>

            <Text style={styles.screenText}>Settings</Text>

          
        </View>
        
    );
}