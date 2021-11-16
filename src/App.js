import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dialer from './components/layouts/Dialer';
import Incoming from './components/layouts/Incoming';
import Connecting from './components/layouts/Connecting';
import Ongoing from './components/layouts/Ongoing';
import './App.css';
import './styles/dialer.scss';

const App = () => {
	return (
		<Router>
			<div className='body'>
				<Switch>
					<Route exact path='/' component={Dialer}></Route>
					<Route exact path='/Incoming' component={Incoming}></Route>
					<Route exact path='/Connecting' component={Connecting}></Route>
					<Route exact path='/Ongoing' component={Ongoing}></Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
