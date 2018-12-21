import React from 'react';

import '../../css/views/contact.scss';

export default function Contact(props) {
    return (
        <div className="contact contact-container">
            <h2 className="section-title">
                &lt;<span className="component-name">Contact</span>&gt;
            </h2>
            <div className="contact-details-wrapper">
                <div className="contact-detail">
                    <i class="fas fa-envelope" aria-hidden></i>
                    <a href="mailto:amanda@amandareilly.me" className="link contact-link contact-detail" aria-label="Email">amanda@amandareilly.me</a>
                </div>
                <div className="contact-detail">
                    <i class="fas fa-mobile-alt" aria-hidden></i>
                    <p class="contact-detail" aria-label="Phone Number">619-739-1419</p>
                </div>
            </div>
            <p className="section-title" aria-hidden>
                &lt;/<span className="component-name">Contact</span>&gt;
            </p>
        </div>
    );
}