import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => (
    <div>
        Main page lazy loaded
        <Link to="/test">link</Link>
    </div>
);

export default Homepage;
