import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// Components
import Navbar from './components/Navbar';

function App() {
  return (
      <div className="App">
          <Navbar />
          
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
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                              <td>@mdo</td>
                          </tr>
                          <tr>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                              <td>@mdo</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </section>
    </div>
  );
}

export default App;
