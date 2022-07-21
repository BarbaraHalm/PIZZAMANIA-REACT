import React from 'react';

function Navbars() {
    return ( 
        <>
        <nav className="navbar navbar-default navbar-site">
        <div className="container-fluid">
            
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Pizzalux
                </a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
               
                <ul className="nav navbar-nav navbar-right navbar-learn">
                    <li><a href="#">Home</a></li>
                   <li className="you"><a href="#">About Pizza</a></li>
                   <li className="you"><a href="#">Pizza Types</a></li>
                </ul>
            </div>
        </div>
    </nav>
        </>
     );
}

export default Navbars;