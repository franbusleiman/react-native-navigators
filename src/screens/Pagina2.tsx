import * as React from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../styles';
import { AuthContext } from '../context/AuthContext';
import { useTheme } from 'react-native-paper';


export const Pagina2 = () => {


    const Theme = useTheme()

    const { authState, logIn, logOut } = useContext(AuthContext)

    console.log('Theme:', Theme);
    return (
        <View style={[styles.screenView]}>



            {
                (authState.username != '')  ? (
                    <>


                        <Text style={[styles.screenText]}>Welcome {authState.username}</Text>

                        <TouchableOpacity
                            onPress={() => logOut()}>
                            <Text>Log Out</Text>
                        </TouchableOpacity>
                    </>
                ) : (
            <>
                <TouchableOpacity
                    onPress={() => logIn({ email: 'juan@gmail.com', username: 'juan', password: 'psw' })}>
                    <Text style={[styles.screenText]}>Log in</Text>
                </TouchableOpacity></>
            ) 
    }
        </View>
    );
}

const LoggableText = (props:any) => {
    const styles = StyleSheet.flatten(props.style); // Flatten the styles
    console.log('Applied Styles:', styles);
  
    return <Text {...props} />;
  };