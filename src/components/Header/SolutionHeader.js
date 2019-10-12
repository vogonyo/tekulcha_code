import React from 'react';
import './Header.css';

const solutionHeader = () => {
    return (
            <div className="navbar navbar-expand-lg solution-header">
              <div className="container">
                  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                      <li className="nav-item"><a className="nav-link solution-item px-3" href="#development"> Development </a></li>
                      <li className="nav-item"><a className="nav-link solution-item px-3" href="#design"> Design </a></li>
                      <li className="nav-item"><a className="nav-link solution-item px-3" href="#teams"> Distributed Teams </a></li>
                      <li className="nav-item"><a className="nav-link solution-item px-3" href="#innovation"> Innovation  </a></li>
                      <li className="nav-item"><a className="nav-link solution-item px-3" href="#prototyping"> Prototyping </a></li>
                      <li className="nav-item"><a className="nav-link solution-item px-3" href="#maintainance"> Maintainance </a></li>
                  </ul>    
            </div>
         </div>
    );
};

export default solutionHeader;