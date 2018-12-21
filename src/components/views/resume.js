import React from 'react';

import experienceData from '../../data/experienceData';
import ResumeExperience from '../display/resumeExperience';
import resume from '../../pdf/AmandaReillyResumeWebDev.pdf';

import '../../css/views/resume.scss';

const educationData = {
    details: ['Learned industry best practices and practical software development standards with a focus on HTML5, CSS3, JavaScript, jQuery, Node.js, React, Redux, and algorithms and data structures.', 'Created and deployed mobile-first applications while learning new languages and frameworks by collaborating several hours every week with a senior web developer.'],
    employer: 'Thinkful',
    location: '',
    title: 'Full Stack Flex',
    dates: 'December 2018'
};

export default function Resume(props) {
    const experience = experienceData.map((exp) => {
        return(
            <ResumeExperience
                projects={exp.projects}
                details={exp.details}
                employer={exp.employer}
                location={exp.location}
                title={exp.title}
                dates={exp.dates}
            />
        );
    });

    return (
        <div className="resume resume-container">
            <h2 className="section-title">
                &lt;<span className="component-name">Resume</span>&gt;
            </h2>
            <a href={resume} target="_blank" rel="noopener noreferrer" className="resume-pdf-link resume-link"><i class="fas fa-file-pdf" aria-hidden></i> Download As PDF</a>
            <div className="resume-wrapper">
                <section className="resume-summary resume-section">
                    <h4 className="resume-section-title">Summary</h4>
                    <p className="resume-summary-text">Full stack developer with a passion for puzzle-solving and the skill to write clean, testable, modular code.</p>
                    <p className="resume-summary-tex">Experience with MERN stack and ready and willing to dive head-first into any tech stack and keep at it until there's nothing more to learn (so, forever).</p>
                </section>
                <section className="resume-skills resume-section">
                    <h4 className="resume-section-title">Skills</h4>
                    <dl className="resume-skills-list">
                        <dt>Intermediate:</dt>
                        <dd>PHP, Gulp, MySql</dd>
                        <dt>Advanced:</dt>
                        <dd>Mongoose, React, jQuery, Git, GitHub, NPM, SASS, Handlebars, TDD with Enzyme</dd>
                        <dt>Proficient:</dt>
                        <dd>JavaScript (ES6), Node.js, MongoDB, TDD with Mocha and Chai, HTML5, CSS3, REST APIs</dd>
                        <dt>Expert:</dt>
                        <dd>Written & verbal communication, project management, business systems design</dd>

                    </dl>
                </section>
                <section className="resume-experience resume-section">
                    <h4 className="resume-section-title">Experience</h4>
                    {experience}
                </section>
                <section className="resume-education resume-section">
                    <h4 className="resume-section-title">Education</h4>
                    <ResumeExperience 
                        details={educationData.details}
                        employer={educationData.employer}
                        location={educationData.location}
                        title={educationData.title}
                        dates={educationData.dates}
                    />
                </section>
            </div>
            <p className="section-title" aria-hidden>
                &lt;/<span className="component-name">Resume</span>&gt;
            </p>
        </div>
    );
}