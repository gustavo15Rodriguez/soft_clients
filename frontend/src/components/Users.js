import React from 'react';

class Users extends React.Component {

    state = {
        data: []
    }

    async componentDidMount() {
        await this.fecthUsers()
    }

    fecthUsers = async () => {
        let response = await fetch('http://localhost:3001/get_users')
        let data = await response.json()
        console.log(data);

        this.setState({
            data
        })
    }

    parseData() {
        if (this.state.data) {
            return this.state.data.map(((value, i) => {
                return (
                    <tr key={i}>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        <td>{value.creation_date}</td>
                        <td>{value.creation_date}</td>
                    </tr>
                )
            }))
        } else {
            return (
                <h2>Aun no hay usuarios en la base de datos.</h2>
            )
        }
    }

    render() {
        return (
            <section>
                <div class="container">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nombres</th>
                                <th scope="col">Email</th>
                                <th scope="col">Fecha de nacimiento</th>
                                <th scope="col">Fecha de creacion</th>
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