import React, { Component } from 'react';
//link te ayuda a navegar entre componentes sin recargar la pagina
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container">
                  
                    <Link className="navbar-brand text-info" to="/">
                        STACK MERN NOTES
                    </Link>

                    <button className="navbar-toggler" data-target="#my-nav-react" data-toggle="collapse" aria-controls="my-nav-react" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div id="my-nav-react" className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Notes</Link>
                            </li>

                            <li className="nav-item active">
                                <Link className="nav-link" to="/create">Create Note</Link>
                            </li>

                            <li className="nav-item active">
                                <Link className="nav-link" to="/user">Create User</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
