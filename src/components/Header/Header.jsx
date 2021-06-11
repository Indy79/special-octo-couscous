import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import './Header.scss';
import UserAvatar from './UserAvatar/UserAvatar';

const Header = () => {
    const themeContext = useContext(ThemeContext);
    return (
        <header className={`${themeContext.theme}`}>
            <div>Beer Finder</div>
            <div>
                <UserAvatar />
            </div>
        </header>
    );
};

export default Header;
