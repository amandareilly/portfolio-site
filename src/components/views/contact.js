import React from 'react';

import '../../css/views/contact.scss';

export default function Contact(props) {
    return (
        <div className="contact contact-container">
            <h2 className="section-title">
                &lt;<span className="component-name">Contact</span>&gt;
            </h2>
            <div className="contact-text">
                <p className="contact-text-paragraph">
                    I'm currently <span className="available">available</span> for <span className="available-for">freelance work and job opportunities.</span>  Let's chat!
                </p>
            </div>
            <div className="contact-details-wrapper">
                <div className="contact-detail">
                    <i class="fas fa-envelope" aria-hidden></i>
                    <a href="mailto:amanda@amandareilly.me" className="link contact-link contact-detail-data" aria-label="Email Address">amanda@amandareilly.me</a>
                </div>
                <div className="contact-detail">
                    <i class="fas fa-mobile-alt" aria-hidden></i>
                    <p class="contact-detail-data" aria-label="Phone Number">619-739-1419</p>
                </div>
                <div className="contact-detail">
                    <i class="fab fa-github" aria-hidden></i>
                    <a className="link contact-link contact-detail-data" href="https://github.com/amandareilly" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">github.com/amandareilly</a>
                </div>
                <div className="contact-detail">
                    <i class="fab fa-linkedin-in" aria-hidden></i>
                    <a className=" link contact-link contact-detail-data" href="https://linkedin.com/in/amandareilly-sd" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">linkedin.com/in/amandareilly-sd</a>
                </div>
            </div>
            <p className="section-title" aria-hidden>
                &lt;/<span className="component-name">Contact</span>&gt;
            </p>
        </div>
    );
}