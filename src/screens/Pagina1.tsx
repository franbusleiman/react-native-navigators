import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../../styles';
import { WebView } from 'react-native-webview';

import { StackScreenProps } from '@react-navigation/stack';
import { StackProps } from '../navigators/StackNavigator';



interface Props extends StackScreenProps<StackProps, 'Pagina1'>{};

export const Pagina1 = ({navigation}: Props) => {

    return (
    

            <WebView source={{ uri: 'http://192.168.1.22:3000/' }} style={{ flex: 1 }} />

         
    );
}