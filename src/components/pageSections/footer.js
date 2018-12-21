import React from 'react';

import '../../css/pageSections/footer.scss';

export default function Footer(props) {
    return (
        <footer className="footer-container">
            <div className="footer-link-wrapper">
                <a href='https://github.com/amandareilly' aria-label='View my GitHub profile.' className='footer-link' target='_blank' rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                <a href='https://linkedin.com/in/amandareilly-sd' aria-label="View my LinkedIn profile" className='footer-link' target='_blank' rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
                <a href='mailto:amanda@amandareilly.me' aria-label="Email me at amanda@amandareilly.me" className='footer-link' target='_blank' rel="noopener noreferrer"><i class="fas fa-envelope"></i></a>
            </div>
        </footer>
    );
}