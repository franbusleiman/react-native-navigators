import { createContext, useReducer } from "react"
import { authReducer, loginPayload } from "./authReducer"


export interface AuthState {
    username: string
    email: string
    password: string
}

export const initialState: AuthState = {
    username: '',
    email: '',
    password: ''
}

export interface AuthProps {
    authState: AuthState,
    logIn: (payload: loginPayload) => void,
    logOut: () =>void
}


export const AuthContext = createContext({} as AuthProps);

export const AuthProvider = ({ children }: any) => {


    const[authState, dispatch] = useReducer(authReducer ,initialState)

    const logIn = (payload: loginPayload) => {
        dispatch({actionType: 'login', payload})
    }

    const logOut = () => {

        dispatch({actionType: 'logout'})
    }

    return (

        <AuthContext.Provider
            value={{ authState, logIn, logOut }}>
            {children}

        </AuthContext.Provider>
    )

}