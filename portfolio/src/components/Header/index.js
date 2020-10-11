import React from 'react';
import Nav from '../Nav';

function Header(props) {

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">Jonathan Eimer</a> 
            </h2>
            <div>
                <Nav handlePageChange={props.handlePageChange} currentPage={props.currentPage} />
            </div>
        </header>
    )
}

export default Header;