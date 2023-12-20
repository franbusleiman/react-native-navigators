import * as React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import Config from 'react-native-config';
import { StackProps } from '../navigators/StackNavigator';



interface Props extends StackScreenProps<StackProps, 'Pagina1'> { };

export const Pagina1 = ({ navigation }: Props) => {

    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState("");


    useEffect(() => {
        GoogleSignin.configure({
            webClientId:'999630332502-16t6fl84v3kg3ogruahjn26t41sn7fkk.apps.googleusercontent.com',
            offlineAccess: true,
        });
    }, []);

    const _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const { user: { email, id, name } } = await GoogleSignin.signIn();
            setuserInfo(email)
            setloggedIn(true);
        } catch (error: any) {

            if (error.code) {
                console.error("Error Code:", error.code);
            }

            if (error.message) {
                console.error("Error Message:", error.message);
            }

        }
    };

    return (
        <>
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {!loggedIn ? (<View >
                    <GoogleSigninButton
                        style={{ width: 212, height: 48 }}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Light}
                        onPress={_signIn}
                    />
                </View>) : <Text>Email Logged in: {userInfo}</Text>}

            </SafeAreaView>
        </>
    );
}