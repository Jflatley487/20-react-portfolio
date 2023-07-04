import React from 'react';
import Project from './Project';

function Portfolio() {
    return (
        <section>
            <h1>Portfolio</h1>
            <div className="projects-list">
                <Project
                    title="Project 1"
                    image="/path/to/project1-image.jpg"
                    deployedLink="https://example.com"
                    githubLink="https://github.com/example"
                />
                <Project
                    title="Project 2"
                    image="/path/to/project2-image.jpg"
                    deployedLink="https://example.com"
                    githubLink="https://github.com/example"
                />
                <Project
                    title="Project 3"
                    image="/path/to/project3-image.jpg"
                    deployedLink="https://example.com"
                    githubLink=""   
                />
                </div>
        </section>
    );
}

export default Portfolio;