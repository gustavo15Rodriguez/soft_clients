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

        this.setState({
            data
        })
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
                            <tr>
                                <td>Juan carlos</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

export default Users;