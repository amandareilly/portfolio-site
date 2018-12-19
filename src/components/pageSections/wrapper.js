import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Nav from './nav';
import Header from './header';
import Main from './main';
import Footer from './footer';

import '../../css/pageSections/wrapper.scss';

export default function ComponentName(props) {
    return (
        <Router>
            <div className="wrapper" id="wrapper">
                <Nav />
                <div className="page-wrap" id="page-wrap">
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </div>
        </Router>
    );
}