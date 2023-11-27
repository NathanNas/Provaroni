import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/mobile" component={Mobile} />
        <Route path="/pc" component={PC} />
        <Route path="/console" component={console} />
      </Switch>
    </Router>
  );
}

export default App;