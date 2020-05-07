import React from 'react';
import './assets/css/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Components
import Navbar from './components/Navbar';
import Users from './components/Users';
import NewUser from './components/NewUser';
import UpdateUser from './components/UpdateUser';
import Home from "./components/Home";

function App() {
    
    return (
        <div className="App">

            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/crm" component={ Users } />
                    <Route exact path="/crm/new_client" component={ NewUser } />
                    <Route exact path="/crm/update/:id" component={ UpdateUser } />
                </Switch>
            </BrowserRouter>
            
        </div>
    );
}

export default App;
