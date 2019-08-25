import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdLocalPrintshop } from 'react-icons/md'; 
import { MdNewReleases } from 'react-icons/md'; 
import { formatPrice } from '../../utils/format';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { DetalhesJs } from './detalhes'; 

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';
import { Detalhes } from './styles';

import { Text } from './styles';


export default function DetalheProduto({match}) {
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
		<ProductList>
			{product.map(product => (
				<li key={product.id}>
					 <Link to={`/popup`}>
					<a class="print-qr-code">
						<MdNewReleases size={45} color="#FF6347"/>
					</a>
					</Link>

					 <Link to={`/qrcode/${encodeURIComponent(product.title)}`}>
					<a class="print-qr-code">
						<MdLocalPrintshop size={45} color="#FFF"/>
					</a>
					</Link>
					<img src={product.image} alt={product.title} />
				</li>
			))}
			{product.map(product => (
				<li key={product.id}>
					<strong class="product_title">{product.title}</strong>
					<strong class="product_price_full">{product.priceFormatted}</strong>
					<strong class="product_price_parcel">{product.price_parcel}</strong>
					<strong class="product_description_resume">{product.description_resume}</strong>
				</li>
			))}
			<Detalhes>
				{product.map(product => (
					<div>
						<div class="ui attached tabular menu">
							<a class="item title_tab">Informações</a>
							<a class="active item title_tab">Detalhes Técnicos</a>
							<a class="item title_tab">Dimensões</a>
						</div>
						<div class="ui bottom attached segment active tab">{product.description}</div>
						<div class="ui bottom attached segment tab">{product.description}</div>
						<div class="ui bottom attached segment tab">{product.description}</div>
					</div>
				))}
			</Detalhes>
		</ProductList>
		
	);
}
