import React, { lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ROUTES_LIST } from './routesConstant';

const Header = lazy(() => import('../Component/Header/index'));
const Footer = lazy(() => import('../Component/Footer/index'));



interface props {
}

const Routes = (props: props) => {
    return (
        <Router>
            <Switch>
                <PrivateRoutes />
            </Switch>
        </Router>
    )
}

export default Routes

const PrivateRoutes = () => <>
    <Header />{((ROUTES_LIST || []).map((a: object, b: number) => <Route {...a} key={b} />))}
    <Footer /></>;



