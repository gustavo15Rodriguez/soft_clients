import React from 'react';
import { Link } from 'react-router-dom'

class UpdateUser extends React.Component {

    state = {

    }

    async componentDidMount() {
        await this.getUser()
    }

    getUser = async () => {
        if (this.props.match.params.id) {
            let id = this.props.match.params.id
            let response = await fetch(`http://localhost:3001/user/${id}`)
            let data = await response.json()

            this.setState({
                "name": data[0].name,
                "email": data[0].email,
            })
        }
    }

    handleChange = e => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateUser = async e =>  {
        e.preventDefault()
        try {
            let id = this.props.match.params.id
            let config = {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            }
            let res = await fetch(`http://localhost:3001/update_user/${id}`, config)
            let json = await res.json()

            console.log(json)

        } catch (error) {

        }
    };


    render() {
        if (this.state != null) {
            return (
                <div className="container">
                    <br />
                    <div className="card">
                        <h5 className="card-header">Actualizar usuarios</h5>
                        <div className="card-body">
                            <form onSubmit={this.updateUser}>
                                <div className="form-group">
                                    <label htmlFor="names">Nombres completos</label>
                                    <input
                                        name="name"
                                        onChange={this.handleChange}
                                        value={this.state.name}
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
                                        onChange={this.handleChange}
                                        value={this.state.email}
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
                                        onChange={this.handleChange}
                                        value={this.state.birthdate}
                                        type="date"
                                        className="form-control"
                                        id="date" placeholder="birthdate"
                                    />
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Actualizar usuario</button>
                                    <Link className="btn btn-warning" to="/crm">Cancelar</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }else {
            return (
                <div className="container">
                    <br />
                    <h1>Cargando datos...</h1>
                </div>
            )
        }
    }
}

export default UpdateUser;