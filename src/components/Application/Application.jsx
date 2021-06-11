import React, { lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { ThemeProvider } from '../../contexts/ThemeContext';
import { UserProvider } from '../../contexts/UserContext';

import './Application.scss';

const Header = lazy(() => import('../Header'));
const Navigation = lazy(() => import('../Navigation'));
const Main = lazy(() => import('../Main'));
const Homepage = lazy(() => import('../../pages/Homepage'));
const Beers = lazy(() => import('../../pages/Beers'));

const Application = () => {
    return (
        <ThemeProvider>
            <UserProvider>
                <Router>
                    <section id="page">
                        <Header />
                        <Navigation />
                        <Main>
                            <Switch>
                                <Route path="/beers">
                                    <Beers />
                                </Route>
                                <Route path="/">
                                    <Homepage />
                                </Route>
                            </Switch>
                        </Main>
                    </section>
                </Router>
            </UserProvider>
        </ThemeProvider>
    );
};

export default Application;
