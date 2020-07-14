import React from 'react';
//cuando visites esta ruta (path) usa este componente (NotesList)
import { BrowserRouter as Router, Route } from 'react-router-dom';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Navigation from './components/Navigation';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import NotesList from './components/NotesList';

import './App.css';

function App() {
  return (
    <Router>
      <Navigation/>

      <div className="container p-4">
        <Route path='/' exact component={NotesList} /> 
        <Route path='/edit/:id' component={CreateNote} />
        <Route path='/create' component={CreateNote} />
        <Route path='/user' component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
