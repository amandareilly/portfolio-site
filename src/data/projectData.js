import hpThumb from '../img/harry-potter-thumb.png';
import youquityThumb from '../img/youquity-thumb.png';
import symptomCheckerThumb from '../img/symptom-checker-thumb.png';
import purchaserThumb from '../img/purchaser-thumb.png';

export default [
    {
        title: 'YouQuity',
        thumbSrc: youquityThumb,
        description: [
            "YouQuity is an app to help small businesses manage their equity structures.",  
            "This is something that many privately held small businesses struggle with. Attorneys are typically used to manage this process, at a cost of thousands of dollars (or more) per year, but with the proper tools this process can be managed by the small business with minimal attorney oversight, greatly reducing costs.", 
            "This MVP proof-of-concept consists of a React client and a separately-hosted Node/Express RESTful API."
        ],
        techStack: ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'React', 'Redux', 'Node.js', 'MongoDB', 'Express.js', 'Mongoose.js', 'CORS', 'Babel.js', 'webpack', 'git', 'GitHub', 'Travis CI', 'Heroku', 'Mocha', 'Chai', 'Enzyme'],
        links: [
            {
                text: 'Client Repo',
                url: 'https://github.com/amandareilly/youquity-client',
                type: 'github'
            },
            {
                text: 'API Repo',
                url: 'https://github.com/amandareilly/youquity-api',
                type: 'github'
            },
            {
                text: 'Live Demo',
                url: 'http://youquity.amandareilly.me',
                type: 'link'
            }
        ]

    },
    {
        title: 'Purchaser',
        thumbSrc: purchaserThumb,
        description: [
            "Purchaser is an app that allows users in a small business environment to create, approve, and manage purchase orders.",
            "Small businesses often struggle with purchasing, and this app enables users to see at-a-glance items that have been requested, and the status of those items as they move through the purchasing process."
        ],
        techStack: ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'jQuery', 'Handlebars.js', 'Node.js', 'MongoDB', 'Express.js', 'Mongoose.js', 'Babel.js', 'webpack', 'Gulp.js', 'git', 'GitHub', 'Travis CI', 'Heroku', 'Mocha', 'Chai'],
        links: [
            {
                text: 'Repo',
                url: 'https://github.com/amandareilly/purchase-order-app',
                type: 'github'
            },
            {
                text: 'Live Demo',
                url: 'http://purchaser.amandareilly.me',
                type: 'link'
            }
        ]
    },
    {
        title: 'Symptom Checker',
        thumbSrc: symptomCheckerThumb,
        description: [
            'Everyone has a moment where they feel a twinge, or feel like they are coming down with something, but are not sure if it warrants a call to the doctor, or a trip to the emergency room. This usually results in a trip down the internet "rabbit-hole" in search of answers. We then waste hours or days convincing ourselves that we\'re dying of some obscure tropical disease, when we really just have a common cold.',
            'This application seeks to solve that problem.  Using the Infermedica Medical Diagnosis API, we walk you through an intelligent interview process to provide you with the most likely possible diagnoses, and suggestions on next steps.'
        ],
        techStack: ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'jQuery', 'Handlebars.js', 'Materialize CSS', 'Gulp.js'],
        links: [
            {
                text: 'Repo',
                url: 'https://github.com/amandareilly/symptom-checker',
                type: 'github'
            },
            {
                text: 'Live Demo',
                url: 'http://amandareilly.me/symptom-checker',
                type: 'link'
            }
        ]
    },
    {
        title: 'Harry Potter Quiz App',
        description: ['A fun quiz with a Harry Potter theme - are you the Ultimate Potterhead?'],
        thumbSrc: hpThumb,
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
        links: [
            {
                text: 'Repo',
                url: 'https://github.com/amandareilly/harry-potter-quiz-app',
                type: 'github'
            },
            {
                text: 'Live Quiz',
                url: 'http://amandareilly.me/quiz-app',
                type: 'link'
            }
        ]
    }
];