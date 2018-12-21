import React from 'react';
import {Link} from 'react-router-dom';
import {scaleRotate as Menu} from 'react-burger-menu';

import '../../css/pageSections/nav.scss';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };
    }

    render() {
        return (
            <nav className="main-nav">
                <Menu right pageWrapId={"page-wrap"} outerContainerId={"wrapper"} isOpen={false}>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/resume'>Resume</Link>
                    <Link to='/contact'>Contact</Link>
                </Menu>
            </nav>
        );
    }
}