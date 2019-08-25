import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Celulares from './pages/Produtos/Celulares';
import Menu from './pages/Menu/index';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/celulares" exact component={Celulares} />
			<Route path="/menu" exact component={Menu} />
		
		</Switch>
	);
}
