import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../../styles';

import { StackScreenProps } from '@react-navigation/stack';



interface Props extends StackScreenProps<any, any>{};

export const Pagina1 = ({navigation}: Props) => {

    return (
        <View style={styles.screenView}>

            <Text style={styles.screenText}>Pagina 1</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate('pagina 2', {name:"hola"}) }>
                <Text>Ir a pagina 2</Text>
            </TouchableOpacity>
        </View>
    );
}