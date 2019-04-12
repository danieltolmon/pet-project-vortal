import React from 'react'

import './index.sass'

export default function (props) {

    return (<section className='aboutMe'>
        <h2>Daniel Toledo</h2>
        <div className='aboutMe__links'>
            <a href="https://www.linkedin.com/in/danieltoledomonfort" target="_blank">LinkedIn</a>
            <a href="https://github.com/danieltolmon" target="_blank">GitHub</a>
        </div>

        <p>
            I enjoy learning and understanding how the world works, and some of my main passions are technology, renewable energies and web development. I reinvent myself quite a lot, constantly overcoming new challenges and acquiring new knowledge and skills. I love to learn!
        </p>
        <p>
            I just finished an intense full-stack web development bootcam in Skylab Coder Academy. And now, I am ready to launch my career contributing and helping to develop in an interesting project and motivated team. Right now I'm focused on MERN technologies, but I am ready to learn new technologies.
        </p>
        <p>
            Favorite technologies Front-End:
            <ul>
                <li>HTML5, CSS3, Sass with BEM</li>
                <li>Bootstrap 4</li>
                <li>Javascript ES6</li>
                <li>React</li>
                <li>TDD</li>
            </ul>
        </p>
        <p>
            Favorite technologies Back-End:
            <ul>
                <li>Node.js, Express.</li>
                <li>Database MongoDB, mongoose.</li>
                <li>TDD with Mocha and Chai.</li>
            </ul>
        </p>
        <p>
            Others:
            <ul>
                <li>NPM.</li>
                <li>JWT, JsonWebToken.</li>
                <li>AJAX, API's, Postman.</li>
                <li>Methodology Agile / Scrum.</li>
                <li>Github.</li>
                <li>Trello, Slack</li>
            </ul>
        </p>
    </section>)
}