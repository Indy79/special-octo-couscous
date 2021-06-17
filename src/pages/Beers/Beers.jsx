import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BeerCard from '../../components/BeerCard';
import Button from '../../components/Button';
import Popup from '../../components/Popup';
import { fetchBeers } from '../../services/beers.service';

import './Beers.scss';

const Beers = () => {
    const [beers, setBeers] = useState([]);
    const [beer, setBeer] = useState(undefined);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        fetchBeers().then(setBeers);
    }, []);
    const showModal = (beer) => {
        setBeer(beer);
        setIsOpen(true);
    };
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
                                <Button onClick={() => showModal(beer)}>
                                    Voir le détail
                                </Button>
                            </div>
                        }
                    />
                ))}
            </div>
            <Link to="/">Home</Link>
            {beer && (
                <Popup isOpen={isOpen} isLeaving={() => setIsOpen(false)}>
                    <BeerCard beer={beer} />
                </Popup>
            )}
        </div>
    );
};

export default Beers;
