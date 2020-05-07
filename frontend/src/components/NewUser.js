import React from 'react';
import { Link } from 'react-router-dom'
            
class NewUser extends React.Component {

    date = new Date();

    state = {
        creation_date: this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + this.date.getDate()
    }

    handleSubmit = async e => {
        e.preventDefault()
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            }
            let res = await fetch('http://localhost:3001/add_user', config)
            let json = await res.json()

            console.log(json)
     
        } catch (error) {

        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="container">

                <div className="card">
                    <br />
                    <h5 className="card-header">Agregar usuarios</h5>
                    <div className="card-body">
                        <form onSubmit={ this.handleSubmit } >
                            <div className="form-group">
                                <label htmlFor="names">Nombres completos</label>
                            <input
                                name="name"
                                onChange={ this.handleChange }
                                value={ this.state.name } 
                                type="text"
                                className="form-control"
                                id="names"
                                placeholder="Names"
                            />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                onChange={ this.handleChange }
                                value={ this.state.email }    
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                            />
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">Fecha de nacimiento</label>
                            <input
                                name="birthdate"
                                onChange={ this.handleChange }
                                value={ this.state.birthdate }
                                type="date"
                                className="form-control"
                                    id="date" placeholder="birthdate"
                            />
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Crear usuario</button>
                                <Link className="btn btn-warning" to="/crm">Cancelar</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            );
        }
    }
    
export default NewUser;