import React from 'react';
import './assets/css/App.css';

// Components
import Navbar from './components/Navbar';
import Users from './components/Users';

function App() {
    
    return (
        <div className="App">
            <Navbar />
            
            <Users />
        </div>
    );
}

export default App;
