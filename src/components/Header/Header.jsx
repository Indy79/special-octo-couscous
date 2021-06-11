import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import './Header.scss';

const Header = () => {
    const themeContext = useContext(ThemeContext);
    return <header className={`${themeContext.theme}`}>En-tête</header>;
};

export default Header;
