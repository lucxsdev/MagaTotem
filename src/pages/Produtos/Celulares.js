import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/format';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

export default function Celulares() {
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
			const response = await api.get('categorias');

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
				<li key={product.id}>

					<button type="button" onClick={() => handleAddProduct(product.id)}>
						<div>
							<MdAddShoppingCart size={16} color="#FFF" />{' '}
							{amount[product.id] || 0}
						</div>
						<span>{product.title}</span>
					</button>
				</li>
			))}
		</ProductList>
	);
}
