import React from 'react';
import { Link } from 'react-router-dom'

class Users extends React.Component {

    state = {
        data: []
    }

    async componentDidMount() {
        await this.fetchUsers()
    }

    fetchUsers = async () => {
        let response = await fetch('http://localhost:3001/get_users')
        let data = await response.json()
        console.log(data);

        this.setState({
            data
        })
    }

    removeUser(id) {
        fetch(`http://localhost:3001/delete_user/${id}`, {
            method: "DELETE"
        }).then(response => {
            let data = this.state.data.filter(data => data.id !== id);
            this.setState({ data: data });
        });
    };

    parseData() {
        if (this.state.data) {
            return this.state.data.map(((value, i) => {
                return (
                    <tr key={value.id}>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        <td>{value.birthdate}</td>
                        <td>{value.creation_date}</td>
                        <td><a
                            className="btn btn-warning"
                            onClick={this.removeUser.bind(this, value.id)}>Eliminar
                        </a>
                            <Link
                                className="btn btn-info"
                                to={`/crm/update/${value.id}`} >Actualizar
                            </Link>
                        </td>
                    </tr>
                )
            }))
        }
    }

    render() {
        return (
            <section>
                <div className="container">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nombres</th>
                                <th scope="col">Email</th>
                                <th scope="col">Fecha de nacimiento</th>
                                <th scope="col">Fecha de creacion</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.parseData()
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

export default Users;