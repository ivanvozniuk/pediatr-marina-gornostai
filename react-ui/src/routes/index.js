import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Help, Kindergarten, School, Questions } from '../pages';

const routes = [
	{
		path: '/',
		exact: true,
		Component: Home,
	},
	{
		path: '/help',
		exact: false,
		Component: Help,
	},
	{
		path: '/kindergarten',
		exact: true,
		Component: Kindergarten,
	},
	{
		path: '/school',
		exact: true,
		Component: School,
	},
	{
		path: '/questions',
		exact: true,
		Component: Questions,
	},
];

const Routes = () => (
	<Switch>
		{routes.map(({ path, exact, Component }) => (
			<Route key={path} path={path} exact={exact} component={Component} />
		))}
	</Switch>
);

export default Routes;
