import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cart from './pages/Cart';
import Home from './pages/Home';
import Celulares from './pages/Produtos/Celulares';


export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/celulares" exact component={Celulares} />
			<Route path="/cart" component={Cart} />
		</Switch>
	);
}
