import React, { createContext, useReducer, FC } from 'react';

const CONNECT_USER = 'connect_user';
const DISCONNECT_USER = 'disconnect_user';

export class User {
    username: string
    avatar: string

    constructor(username: string, avatar: string) {
        this.username = username;
        this.avatar = avatar;
    }
}

type UserContextState = {
    user: User
    isConnected: boolean
    connect: (user: User) => void
    disconnect: () => void
}

const initialState: UserContextState = {
    user: undefined,
    isConnected: false,
    connect: (user: User) => {},
    disconnect: () => {}
};

function reducer(state, action): UserContextState {
    switch (action.type) {
        case CONNECT_USER:
            return {
                ...state,
                user: action.payload,
                isConnected: true,
            };
        case DISCONNECT_USER:
            return {
                ...state,
                user: {},
                isConnected: false,
            };
        default:
            throw new Error("Action type doesn't exist");
    }
};

export const UserContext = createContext<UserContextState>(initialState);

export const UserProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer<UserContextState>(reducer, initialState);

    const connect = (user: User) => dispatch({ type: CONNECT_USER, payload: user });
    const disconnect = () => dispatch({ type: DISCONNECT_USER });

    return (
        <UserContext.Provider
            value={{
                ...state,
                connect: (user: User) => connect(user),
                disconnect: () => disconnect(),
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
