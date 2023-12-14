import * as React from 'react';
import { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../../styles';
import { AuthContext } from '../context/AuthContext';
import { useTheme } from 'react-native-paper';


export const Pagina2 = () => {

    const theme = useTheme();


    const { authState, logIn, logOut } = useContext(AuthContext)
    return (
        <View style={[styles.screenView, {backgroundColor: theme.colors.primary} ]}>

            {
                (authState.username != '')  ? (
                    <>
                        <Text style={styles.screenText}>Welcome {authState.username}</Text>

                        <TouchableOpacity
                            onPress={() => logOut()}>
                            <Text>Log Out</Text>
                        </TouchableOpacity>
                    </>
                ) : (
            <>
                <TouchableOpacity
                    onPress={() => logIn({ email: 'juan@gmail.com', username: 'juan', password: 'psw' })}>
                    <Text>Log in</Text>
                </TouchableOpacity></>
            ) 
    }
        </View>
    );
}