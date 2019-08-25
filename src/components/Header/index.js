import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import { MdHelpOutline } from 'react-icons/md';
import { Container, Cart } from './styles';

import logo from '../../assets/images/logomaga.png';

export default function Header() {
	const cartSize = useSelector(state => state.cart.length);
	return (
		<Container>
			<Link to="/">
				<img src={logo} alt="" />
			</Link>
			<Cart to="/">
				
				<MdArrowBack size={45} color="#FFF" />
				<div>&nbsp;</div>
				<div>&nbsp;</div>
				<MdHelpOutline size={45} color="#FFF" />

			</Cart>
		</Container>

	);
}


