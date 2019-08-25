import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/format';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';
import { Detalhes } from './styles';

import { Text } from './styles';


export default function DetalhesJs({match}) {
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
	
	const product_id = parseInt(decodeURIComponent(match.params.id));
	let product = products.filter(p => p.id == product_id);

	return (
        <Detalhes>
            {product.map(product => (
                <div>
                    <div class="ui attached tabular menu">
                        <a class="item">Informações</a>
                        <a class="active item">Detalhes Técnicos</a>
                        <a class="item">Dimensões</a>
                    </div>
                    <div class="ui bottom attached segment active tab">Tab 1 Content</div>
                    <div class="ui bottom attached segment tab">Tab 2 Content</div>
                    <div class="ui bottom attached segment tab">Tab 3 Content</div>
                </div>
            ))}
        </Detalhes>
	);
}
