import { AuthState } from "./AuthContext"

export interface loginPayload {
    username: string,
    email: string,
    password: string
}

type ActionType = {
    actionType: 'login',
    payload: loginPayload
} |
{
    actionType: 'logout'
}

export const authReducer = (authState: AuthState, action: ActionType): AuthState => {

    switch (action.actionType) {

        case "login":
            return {
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password
            }
        case "logout":
            return {
                username: '',
                email: '',
                password: ''
            }
    }

}