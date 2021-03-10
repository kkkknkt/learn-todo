import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

export default function App() {
	return (
		<div className='app'>
			<Router forceRefresh={ROUTES.IS_FORCE_REFRESH}>
				<Switch>
					<Route exact path={ROUTES.HOME} component={Home} />
					<Route path={ROUTES.LOGIN} component={Login} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</div>
	);
}
