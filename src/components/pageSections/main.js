import React from 'react';
import {Route} from 'react-router-dom';

import Home from '../views/home';

import '../../css/pageSections/main.scss';

export default function Main(props) {
    return (
        <main className="main-container">
            <Route exact path='/' component={Home} />
        </main>
    );
}