import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <HelloWorld></HelloWorld>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
