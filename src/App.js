import React from 'react';
import {Route,Switch} from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';
import './App.css';
import Home from './components'
import Devexp from './components/Devexp';
import Hireme from './components/Hireme';


import Welcome from './components/Welcome';


function App() {
  return (
    <div>
	<CssBaseline/>
	<Switch>
	<Route exact path="/" component={Home}/>
	<Route path="/dev-experience" component={Devexp}/>
	
	<Route path="/hireme" component={Hireme}/>


	<Route  component={Welcome}/>

	
	</Switch>
	
	</div>
  );
}

export default App;
