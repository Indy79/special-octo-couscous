import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import './Main.scss';

const Main = ({ children }) => {
    const themeContext = useContext(ThemeContext);
    return <main className={`${themeContext.theme}`}>{children}</main>;
};

export default Main;
