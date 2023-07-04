import React from "react";

function Project(props) {
    const { title, image, deployedLink, githubLink } = props.project;

    return (
        <div className="project">
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <div>
                <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Link</a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">Github Repository</a>
            </div>
        </div>
    );
}

export default Project;