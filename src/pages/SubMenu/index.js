import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdTouchApp } from 'react-icons/md';
import { formatPrice } from '../../utils/format';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import { Link } from 'react-router-dom';


import { ProductList } from './styles';

export default function SubMenu() {
	const [products, setProducts] = useState([]);

	const amount = useSelector(state =>
		state.cart.reduce((sumAmount, product) => {
			sumAmount[product.id] = product.amount;
			return sumAmount;
		}, {})
	);

	const dispatch = useDispatch();

	useEffect(() => {
		async function getProducts() {
			const response = await api.get('sub-categorias');

			const data = response.data.map(product => ({
				...product,
				priceFormatted: formatPrice(product.price),
			}));

			setProducts(data);
		}

		getProducts();
	}, []);

	function handleAddProduct(id) {
		dispatch(CartActions.addToCartRequest(id));
	}

	return (
		<ProductList>
			{products.map(product => (
				 <Link to={`/notebook`}>

				<li key={product.id}>

					<button type="button" >
						
						<MdTouchApp size={24} color="#FFF" />{' '}
					
					<span>	<strong>{product.title}</strong></span>
					</button>
				</li>
				</Link>

			))}
		</ProductList>
	);
}
