import React from 'react';
import { Link } from 'react-router-dom'

class Navbar extends React.Component  {

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Soft clients</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/crm">Crm</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/crm/new_client">Agregar clientes</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;