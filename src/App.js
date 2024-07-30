import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>} />
          </Switch>
      </div>
    </Router>
  );
};

export default App;
