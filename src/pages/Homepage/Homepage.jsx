import React, { useEffect, useState } from 'react';
import BeerCard from '../../components/BeerCard';
import ErrorBoundary from '../../components/ErrorBoundary';
import { fetchRandomBeer } from '../../services/beers.service';

const Homepage = () => {
    const [randomBeer, setRandomBeer] = useState(undefined);
    useEffect(() => {
        fetchRandomBeer().then(setRandomBeer);
    }, []);
    return (
        <div>
            {randomBeer && (
                <ErrorBoundary>
                    <BeerCard beer={randomBeer} onError={false} />
                </ErrorBoundary>
            )}
        </div>
    );
};

export default Homepage;
