import React from 'react';

import '../../css/display/resumeExperience.scss';

export default function ResumeExperience(props) {
    let detail;
    let type;
    if(props.projects) {
        type = 'projects';
        detail = props.projects.map((project) => {
            return(
                <li className="resume-experience-project resume-experience-list-item">
                    <a href={project.url} className="resume-project-link resume-link" target="_blank" rel="noopener noreferrer">{project.projTitle}</a>: {project.details}
                </li>
            )
        })
    } else {
        type = 'details';
        detail = props.details.map((detail) => {
            return(<li className="resume-experience-detail resume-experience-list-item">{detail}</li>);
        });
    }
    return (
        <div className="resume-experience-entry">
            <div className="resume-experience-heading">
                <div className="resume-experience-header-row">
                    <p className="resume-experience-employer">{props.employer}</p>
                    <p className="resume-experience-location">{props.location}</p>
                </div>
                <div className="resume-experience-header-row">
                    <p className="resume-experience-title">{props.title}</p>
                    <p className="resume-experience-dates">{props.dates}</p>
                </div>
                <ul className={`resume-experience-list resume-experience-${type}`}>
                    {detail}
                </ul>
            </div>
        </div>
    );
}