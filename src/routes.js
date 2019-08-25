import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Celulares from './pages/Produtos/Celulares';
import Menu from './pages/Menu/index';
import Notebook from './pages/Notebook/index';
import SubMenu from './pages/SubMenu/index';
import DetalheProduto from './pages/DetalheProduto/index';






export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/celulares" exact component={Celulares} />
			<Route path="/notebook" component={Notebook} />
			<Route path="/menu" exact component={Menu} />
			<Route path="/sub-menu" exact component={SubMenu} />
			<Route path="/detalhe-produto/:id" exact component={DetalheProduto} />

		</Switch>
	);
}
