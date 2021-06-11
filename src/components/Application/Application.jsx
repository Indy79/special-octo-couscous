import React, { lazy, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { ThemeContext, ThemeProvider } from '../../contexts/ThemeContext';

import './Application.scss';

const Header = lazy(() => import('../Header'));
const Navigation = lazy(() => import('../Navigation'));
const Main = lazy(() => import('../Main'));

const Application = () => {
    const themeContext = useContext(ThemeContext);
    return (
        <ThemeProvider>
            <Router>
                <section id="page">
                    <Header />
                    <Navigation />
                    <Main>
                        <Switch>
                            <Route path="/test">
                                test !!!
                                <Link to="/">back</Link>
                            </Route>
                            <Route path="/">
                                Main page...
                                <Link to="/test">link</Link>
                            </Route>
                        </Switch>
                    </Main>
                </section>
            </Router>
        </ThemeProvider>
    );
};

export default Application;
