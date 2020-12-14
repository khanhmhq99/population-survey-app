import React from 'react';
import Dashboard from './conponents/dashboard/Dashboard'
import Matdodanso from './conponents/choice/Matdodanso'
import Navbar from './conponents/layout/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/matdodanso' component={Matdodanso} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
