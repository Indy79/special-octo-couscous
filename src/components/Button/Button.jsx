import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import './Button.scss';

const Button = ({ children, onClick }) => {
    const themeContext = useContext(ThemeContext);
    return (
        <button className={`${themeContext.theme}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
