import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/format';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router'

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';
import { Text } from './styles';


export default function Notebook() {
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
			const response = await api.get('products');

			const data = response.data.map(product => ({
				...product,
				priceFormatted: formatPrice(product.price),
			}));

			setProducts(data);
		}

		getProducts();
	}, []);

	function handleAddProduct(id) {
	}

	return (
		<ProductList>
			{products.map(product => (
				 <Link to={`/detalhe-produto/${encodeURIComponent(product.id)}`}>
					<li key={product.id}>
						<img src={product.image} alt={product.title} />
						<strong>{product.title}</strong>
						<span>{product.priceFormatted}</span>
						<span class="price_parcel">{product.price_parcel}</span>
					</li>
				</Link>
			))}
		</ProductList>
	);
}
