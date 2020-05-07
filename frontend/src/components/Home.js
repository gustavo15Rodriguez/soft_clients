import { Link } from "react-router-dom";
import React from "react";
import logo from "../assets/images/logo.png"
import meet from "../assets/images/meet.png"
import users from "../assets/images/users.png"

function Home() {
    const divStyle = {
        backgroundColor: '#26272b',
        padding: '45px 0 20px',
        fontSize: '15px',
        lineHeight: '24px',
        color: '#737373',
    };

    const cards = {
        width: '18rem'
    }

    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-3"><strong>¡Bienvenido a Soft clients!</strong></h1>
                <p className="lead">Sistema para adminsitracion de usuarios.</p>
                <hr className="my-4" />
                <p className="lead">
                    <Link className="btn btn-primary btn-lg" to="/crm/new_client" role="button">Agregar clientes</Link>
                </p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card" style={ cards }>
                            <img className="card-img-top" src={ users } alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Compromiso</h5>
                                    <p className="card-text">Gracias a nuestro empeño, cada dia somos mas.</p>
                                    <Link to="/crm" className="btn btn-primary">Ver usuarios</Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={ cards }>
                            <img className="card-img-top" src={ logo } alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Seguridad</h5>
                                    <p className="card-text">Nos preocupamos por la integridad de sus datos.</p>
                                    <Link to="/crm/new_client" className="btn btn-primary">Registrarme</Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={ cards }>
                            <img className="card-img-top" src={ meet } alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Unidad</h5>
                                    <p className="card-text">Mas que una empresa somos una familia.</p>
                                    <Link to="/crm" className="btn btn-primary">Cononcer usuarios</Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-4" />
            <footer className="page-footer font-small mdb-color pt-4" style={divStyle}>
                <div className="container text-center text-md-left">
                    <div className="row text-center text-md-left mt-3 pb-3">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Soft clients</h6>
                            <p>Sistema para adminsitracion de usuarios.</p>
                        </div>
                        <hr className="w-100 clearfix d-md-none"/>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Sobre nosotros</h6>
                            <p>
                                <Link to="/">Home</Link>
                            </p>
                            <p>
                                <Link to="/crm">CRM</Link>
                            </p>
                            <p>
                                <Link to="/crm/new_client">Agregar usuarios</Link>
                            </p>
                        </div>

                        <hr className="w-100 clearfix d-md-none"/>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Mas informacion</h6>
                            <p>
                                <a href="#">Pagina web</a>
                            </p>
                            <p>
                                <a href="#">GitHub</a>
                            </p>
                            <p>
                                <a href="#">GitLab</a>
                            </p>
                        </div>

                        <hr className="w-100 clearfix d-md-none"/>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
                            <p>
                                <i className="fas fa-home mr-3"></i> Pereira, Colombia</p>
                            <p>
                                <i className="fas fa-envelope mr-3"></i> softclients@gmail.com</p>
                            <p>
                                <i className="fas fa-phone mr-3"></i> +57 3015008594</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row d-flex align-items-center">

                        <div className="col-md-7 col-lg-8">

                            <p className="text-center text-md-left">© 2020 Copyright:
                                <a href="#">
                                    <strong> softclients.com</strong>
                                </a>
                            </p>

                        </div>

                        <div className="col-md-5 col-lg-4 ml-lg-0">

                            <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-google-plus-g"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;