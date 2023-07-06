import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function Header() {
    const [currentPage, handlePageChange] = useState('About');

    //render page method
    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            default:
                return <About />;   
                }
            };

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-brand'>
                    <a
                    className='navbar-item'
                    rel='noreferrer'
                    target='_blank'
                    href='https://github.com/Jflatley487'
                    >
                        <span className='content is-large'>Joseph Flatley</span>
                    </a>
                </div>  
                </nav>
                <Navigation 
                currentPage={currentPage} 
                handlePageChange={handlePageChange} 
                />
                <main>
                    <div>{renderPage(currentPage)}</div>
                </main>
        </div>
    );
}

export default Header;



