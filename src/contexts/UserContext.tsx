import React, { createContext, useReducer, FC } from 'react';

type Action =
 | { type: 'connect_user', payload: User }
 | { type: 'loading_user' }
 | { type: 'disconnect_user' };

type State =
 | { status: 'connected', user: User }
 | { status: 'loading', user: void }
 | { status: 'disconnected', user: void };

type ContextState = State & {
    connect: (user: User) => void
    disconnect: () => void
    loading: () => void
}

export class User {
    username: string
    avatar: string

    constructor(username: string, avatar: string) {
        this.username = username;
        this.avatar = avatar;
    }
}

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'connect_user':
            return {
                ...state,
                user: action.payload,
                status: 'connected',
            };
        case 'disconnect_user':
            return {
                ...state,
                user: undefined,
                status: 'disconnected',
            };
        case 'loading_user':
            return {
                ...state,
                user: undefined,
                status: 'loading',
            };
        default:
            return state;
    }
};

export const UserContext = createContext<ContextState>({ 
    status: 'disconnected', 
    user: undefined, 
    connect: (user: User) => {},
    disconnect: () => {},
    loading: () => {}
});

export const UserProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { status: 'disconnected', user: undefined });

    const connect = (user: User) => dispatch({ type: 'connect_user', payload: user });
    const disconnect = () => dispatch({ type: 'disconnect_user' });
    const loading = () => dispatch({ type: 'loading_user' });

    return (
        <UserContext.Provider
            value={{
                ...state,
                connect: (user: User) => connect(user),
                disconnect: () => disconnect(),
                loading: () => loading(),
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
