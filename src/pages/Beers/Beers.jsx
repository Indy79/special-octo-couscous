import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BeerCard from '../../components/BeerCard';
import Button from '../../components/Button';
import Popup from '../../components/Popup';
import { fetchBeers } from '../../services/beers.service';

import './Beers.scss';

const Beers = () => {
    const [beers, setBeers] = useState([]);
    useEffect(() => {
        fetchBeers().then(setBeers);
    }, []);
    return (
        <div>
            <h1>Beers</h1>
            <div className="beer-list">
                {beers.map((beer) => (
                    <BeerCard
                        key={beer.id}
                        beer={beer}
                        actions={
                            <div>
                                <Button
                                    onClick={() => (
                                        <Popup>
                                            <BeerCard beer={beer} />
                                        </Popup>
                                    )}
                                >
                                    Voir le détail
                                </Button>
                            </div>
                        }
                    />
                ))}
            </div>
            <Link to="/">Home</Link>
        </div>
    );
};

export default Beers;
