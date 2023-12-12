import * as React from 'react';
import { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../../styles';
import { AuthContext } from '../context/AuthContext';


export const Pagina2 = () => {


    const { authState, logIn, logOut } = useContext(AuthContext)
    return (
        <View style={styles.screenView}>

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
                    onPress={() => logIn({ email: 'juan@gmail.com', username: 'juanceto', password: 'psw' })}>
                    <Text>Log in</Text>
                </TouchableOpacity></>
            ) 
    }
        </View>
    );
}