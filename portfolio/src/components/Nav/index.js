import React from 'react';


function Nav(props) {
    const tabs = ['Home', 'About', 'Portfolio', 'Resume', 'Contact'];
    return (
        <ul className="flex-row nav-align">
          {tabs.map(tab => (
            <li className="mx-2" key={tab}>
              <a
                href={'#' + tab.toLowerCase()}
                // Whenever a tab is clicked on,
                // the current page is set through the handlePageChange props.
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
      );
    }

    export default Nav;