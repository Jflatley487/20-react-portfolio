import React from 'react';

function Navigation(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
    return (
        <div className='tabs is-centered'>
            <ul className='nav nav-tabs'>
                {tabs.map(tab => (
                    <li 
                    className={
                        props.currentPage === tab ? 'nav-link active' : 'nav-link'
                    }
                    key={tab}
                    >
                        <a
                        href={'#' + tab.toLowerCase()}
                        onClick={() => props.handlePageChange(tab)}
                        className={
                            props.currentPage === tab ? 'nav-link active' : 'nav-link'
                        }
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}



/*function Navigation() {
    return(
        <nav>
            <ul>
                <li>
                    <a href="#about">About Me</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact Me</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
            </ul>
        </nav>
    );
}*/

export default Navigation;