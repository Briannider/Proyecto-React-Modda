import React from 'react';

const Nav = () => {
    return (<div><nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img className="logo-nav" src="img/Logo_nav.png" alt="Icononavleft" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav d-flex">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#cat">Catalogo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#con">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>)
};

export default Nav;
