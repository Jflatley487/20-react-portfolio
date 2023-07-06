/*import React from 'react';  

function Resume() {
    return (
        <section>
            <h1>Resume</h1>
           
            <p>Download my <a href="./assets/Resume.pdf" download>resume</a></p>
            <h2>Front-end Proficiencies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h2>Back-end Proficiencies</h2>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </section>
    );
}

export default Resume; */

function Resume() {
    return (
      <div className="columns">
        <div className="column">
          <p className="content is-medium">Résumé</p>
          <hr />
  
          <a
            className="button is-primary"
            href={process.env.PUBLIC_URL + "./assets/Resume.pdf"}
            target="_blank" rel="noreferrer"
          >
            <span className="icon">
              <i className="fas fa-download"></i>
            </span>
            <span>Download My Resume</span>
          </a>
        </div>
        <div className="column">
          <p className="content is-medium">Skills</p>
          <hr />
          <ul>
                <li style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Front-end:</li>
                <li>HTML, CSS, Javascript</li>
                <li>JQuery, React</li>
                <li>Responsive Design,</li>
                <li>Bootstrap</li>
                <hr/>
                <li style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Back-end:</li>
                <li>APIs, Node, Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST, GraphQL</li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Resume;