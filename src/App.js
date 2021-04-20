import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from 'C:\\Users\\gunne\\show-code\\src\\components\\pages\\Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tech from 'C:\\Users\\gunne\\show-code\\src\\components\\pages\\Tech';
import Contact from 'C:\\Users\\gunne\\show-code\\src\\components\\pages\\Contact';
import SignUp from 'C:\\Users\\gunne\\show-code\\src\\components\\pages\\SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/tech' component={Tech} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
