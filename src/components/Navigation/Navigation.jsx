import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
    ThemeContext,
    DARK_THEME,
    LIGHT_THEME,
} from '../../contexts/ThemeContext';
import Button from '../Button/Button';

import './Navigation.scss';

const Navigation = () => {
    const themeContext = useContext(ThemeContext);
    return (
        <nav className={`${themeContext.theme}`}>
            <ul>
                <li className={`${themeContext.theme}`}>
                    <Link to="/beers">Beers</Link>
                </li>
            </ul>
            <ul className="bottom-fix">
                <li>
                    <Button
                        className="flat-button"
                        onClick={() => themeContext.toggleTheme()}
                    >
                        Swith to{' '}
                        {themeContext.theme === LIGHT_THEME
                            ? DARK_THEME
                            : LIGHT_THEME}
                    </Button>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
