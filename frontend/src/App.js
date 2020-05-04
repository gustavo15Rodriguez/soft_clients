import React from 'react';
import './assets/css/App.css';

// Components
import Navbar from './components/Navbar';
import Users from './components/Users';
// import NewUser from './components/NewUser';

function App() {
    
    return (
        <div className="App">
            <Navbar />
            
            <Users />

        </div>
    );
}

export default App;
