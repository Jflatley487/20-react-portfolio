import React from 'react';
import Project from './Project';

function Portfolio() {
    const projects = [
        {
            title: "Project 1",
            image: "/path/to/project1-image.jpg",
            deployedLink: "https://example.com",
            githubLink: "https://github.com/example"
        },
        {
            title: "Project 2",
            image: "/path/to/project2-image.jpg",
            deployedLink: "https://example.com",
            githubLink: "https://github.com/example"
        },
        {
            title: "Project 3",
            image: "/path/to/project3-image.jpg",
            deployedLink: "https://example.com",
            githubLink: "https://github.com/example"
        }

    ];

    return (
        <section>
            <h1>Portfolio</h1>
            <div className='projects-list'>
                {projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;