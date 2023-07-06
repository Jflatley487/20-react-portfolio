import React from 'react';
import Project from './Project';


    const projects = [
        {
            id: 0,
            title: "recAPIs",
            image: "https://gatheringdreams.com/wp-content/uploads/2019/03/healthy-meal-prep-2022-square.jpg",
            live: "https://jflatley487.github.io/RecAPIs-project/",
            repo: "https://github.com/Jflatley487/RecAPIs-project.git"
        },
        {
            id: 1,
            title: "BarkBook",
            image: "https://corgiplanet.com/wp-content/uploads/2022/03/Corgi-Planet-Timur-Garifov-2.jpg",
            live: "https://avanibarkbook.herokuapp.com/",
            repo: "https://github.com/Jflatley487/BarkBook.git"
        },
        {
            id: 2,
            title: "HangTime -coming soon",
            image: "https://tensionclimbing.com/wp-content/uploads/2022/11/Honestone-6-scaled.jpg",
            live: "https://example.com",
            repo: "https://github.com/example"
        }

    ];

function Portfolio() {
    return (
        <div>
        <p className="content is-medium">Portfolio</p>
        <hr />
  
        <Project projects={projects} />
      </div>
    );
  }

export default Portfolio;