import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';

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
            <ul>
                <li>
                    <button onClick={() => themeContext.toggleTheme()}>
                        Swith to {themeContext.theme}
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
