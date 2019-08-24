import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';

import logo from '../../assets/images/logomaga.png';

export default function Header() {
	const cartSize = useSelector(state => state.cart.length);
	return (
		<Container>
			<Link to="/">
				<img src={logo} alt="" />
			</Link>
			<Cart to="/cart">
				<div>
					
					<strong>Bem vindo :)</strong>
					
				</div>
				<MdShoppingBasket size={36} color="#FFF" />
			</Cart>
		</Container>
	);
}


