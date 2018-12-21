import React from 'react';

import '../../css/display/projectCard.scss';

export default function ProjectCard(props) {
    const techStack = props.techStack.join(', ');
    const description = props.description.map((paragraph) => {
        return(
            <p className="description-text">
                {paragraph}
            </p>
        );
    });
    const links = props.links.map((link) => {
        const icons = {
            github: 'fab fa-github',
            link: 'fas fa-external-link-alt'
        };
        return(
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="project-link"><i className={icons[link.type]}></i> {link.text}</a>
        );
    })
    return (
        <article className="project project-card">
            <header className="project-header">
                <img className="project-thumbnail" src={props.thumbSrc} alt={`Project: ${props.title}`} />
            </header>
            <div className="project-body-footer-wrapper">
                <section className="project-body">
                    <h4 className="project-section-title">Description:</h4>
                    <div className="project-description">{description}</div>
                </section>
                <footer className="project-footer">
                    <div className="link-box project-link-box">
                        {links}
                    </div>
                    <div className="tech-stack">
                        <h4 className="project-section-title">Tech Stack:</h4>
                        <p>
                            {techStack}
                        </p>
                    </div>
                </footer>
            </div>
        </article>
    );
}