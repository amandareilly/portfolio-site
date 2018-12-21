import React from 'react';
import {Link} from 'react-router-dom';

import headshot from '../../img/headshot_square.jpg';

import '../../css/views/home.scss';

export default function ComponentName(props) {
    return (
        <div className="home home-container">
            <div className="row-wrapper">
                <div className="headshot-wrapper">
                    <img className="headshot" src={headshot} alt="Amanda Reilly" />
                    <p className="greeting">Hi, I'm Amanda.</p>
                </div>
                <div className="intro-text-wrapper">
                    <p className="intro-text">I'm a full-stack developer with a passion for problem-solving.</p>
                    <p className="intro-text">When I'm not writing code, you'll find me either traveling the world or reading a book.</p>
                    <p className="intro-text">Actually, it's a good bet that you'll find me doing both at once.</p>
                </div>
            </div>
            <div className="link-box">
                <Link to='/about' className='read-more about'>About Me</Link>
                <Link to='/projects' className='read-more projects'>My Projects</Link>
            </div>
        </div>
    );
}