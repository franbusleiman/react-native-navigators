import * as React from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import styles from '../../styles';
import { AuthContext } from '../context/AuthContext';



export const Pagina2 = () => {


    const Theme = useTheme()

    const { authState, logIn, logOut } = useContext(AuthContext)

    console.log('Theme:', Theme);
    return (
        <View style={[styles.screenView]}>



            {
                (authState.username != '') ? (
                    <>


                        <Text style={[styles.screenText]}>Welcome {authState.username}</Text>

                        <Button icon="camera" mode="contained" onPress={() => logOut()}>
                            Log out
                        </Button>
                    </>
                ) : (
                    <>

                        <Button icon="camera" mode="contained" onPress={() => logIn({ email: 'juan@gmail.com', username: 'juan', password: 'psw' })}>
                            Log in
                        </Button>
                    </>
                )
            }
        </View>
    );
}

const LoggableText = (props: any) => {
    const styles = StyleSheet.flatten(props.style); // Flatten the styles

    return <Text {...props} />;
};