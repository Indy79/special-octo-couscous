import React, { FC, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Beer } from '../../models/Beer';

import './BeerCard.scss';

interface BeerCardProps {
    beer: Beer;
    onError: boolean;
    actions: React.ReactElement;
}

const BeerCard: FC<BeerCardProps> = ({ beer, onError, actions }) => {
    const themeContext = useContext(ThemeContext);
    if (onError) throw new Error('oulalal Error');
    return (
        <section className={`${themeContext.theme} beer-card`}>
            <header>
                <span>{beer.name}</span>
            </header>
            <main>
                <div>
                    <span>Description : </span>
                    <span>{beer.description}</span>
                </div>
                <div>
                    <span>Alcool : </span>
                    <span>{beer.abv} %</span>
                </div>
                <div>
                    <span>Type : </span>
                    <span>{beer.tagline}</span>
                </div>
            </main>
            <footer>{actions}</footer>
        </section>
    );
};

BeerCard.defaultProps = {
    onError: false,
};

export default BeerCard;
