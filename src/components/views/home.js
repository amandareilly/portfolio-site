import React from 'react';
import {Link} from 'react-router-dom';

import headshot from '../../img/headshot_square.jpg';

import '../../css/views/home.scss';

export default function ComponentName(props) {
    return (
        <div className="home home-container">
            <img className="headshot" src={headshot} alt="Amanda Reilly" />
            <p class="greeting">Hi, I'm Amanda.</p>
            <p class="intro-text">I'm a full-stack developer with a passion for problem-solving.</p>
            <p class="intro-text">When I'm not writing code, you'll find me either traveling the world or reading a book.</p>
            <p class="intro-text">Actually, it's a good bet that you'll find me doing both at once.</p>
            <div className="link-box">
                <Link to='/about' className='read-more about'>Read More</Link>
                <Link to='/projects' className='read-more projects'>View Projects</Link>
            </div>
        </div>
    );
}