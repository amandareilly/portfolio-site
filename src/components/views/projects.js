import React from 'react';

import ProjectCard from '../display/projectCard';
import projectData from '../../data/projectData';

import '../../css/views/projects.scss';

export default function Projects(props) {
    const projects = projectData.map((project) => {
        return(
            <ProjectCard 
                title={project.title}
                thumbSrc={project.thumbSrc}
                description={project.description}
                techStack={project.techStack}
                links={project.links}
            />
        );
    })
    return (
        <div className="projects projects-container">
            <h2 className="section-title">
                &lt;<span className="component-name">Projects</span>&gt;
            </h2>
            <section className="project-card-wrapper">
                {projects}
            </section>
            <p className="section-title" aria-hidden>
                &lt;/<span className="component-name">Projects</span>&gt;
            </p>
        </div>
    );
}