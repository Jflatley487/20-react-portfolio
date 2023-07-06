import React from "react";

function About() {
    return (
        <div>
            <p className='content is-medium'>About Me</p>
            <hr />
            <img className='my-pic' src="https://media.licdn.com/dms/image/D4E03AQEzD_UwvKAfTw/profile-displayphoto-shrink_800_800/0/1641853008135?e=2147483647&v=beta&t=PmDLksTI0IfUHc1b1uOXCLIMJ64LLVfqBlV0W5q3MoA" alt="me" />
            <p className='content is-italic mt-4'>
                I am currently a web development bootcamp student. 
                Before web development, I had a background in architectural fabrication and aerospace manufacturing. 
                Through this, I came to enjoy the design process and creating something tangible from nothing. 
                Soon after, I developed an intense interest in rock climbing. 
                This new interest in climbing sparked a desire for flexibility in my work-life. 
                Through this desire, I discovered web-development and immediately fell in love with learning a completely new way of building something from nothing. 
                This is a collection of my completed projects.
                </p>
            </div>
    );
}

export default About;