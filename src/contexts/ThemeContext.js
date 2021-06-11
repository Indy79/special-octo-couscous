import React, { createContext, useReducer } from 'react';

const TOGGLE_THEME = 'toggle_theme';

export const LIGHT_THEME = 'light';
export const DARK_THEME = 'dark';

const initialState = {
    theme: LIGHT_THEME,
};

const reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                theme: state.theme === DARK_THEME ? LIGHT_THEME : DARK_THEME,
            };
        default:
            throw new Error("Action type doesn't exist");
    }
};

export const ThemeContext = createContext(initialState);

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleTheme = () => dispatch({ type: TOGGLE_THEME });

    return (
        <ThemeContext.Provider
            value={{
                ...state,
                toggleTheme: () => toggleTheme(),
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
