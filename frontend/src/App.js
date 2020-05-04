import React from 'react';
import './assets/css/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Components
import Navbar from './components/Navbar';
import Users from './components/Users';
import NewUser from './components/NewUser';

function App() {
    
    return (
        <div className="App">

            <BrowserRouter>
                <Navbar />
                <br />
                <h1>Welcome to Soft Clients</h1>
                <br /> 
                <Switch>
                    <Route exact path="/crm" component={ Users } />
                    <Route exact path="/crm/new_client" component={ NewUser } />
                </Switch>
            </BrowserRouter>
            
        </div>
    );
}

export default App;
