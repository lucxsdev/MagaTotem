import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-gap: 0px;
	list-style: none;
	border-radius: 0px;

	.popup_div {
		
	}

	div {
		grid-template-columns: repeat(1, 1fr)!important;
	}

	a.print-qr-code {
		float:right!important;
		text-align: right!important;
		display: inline-block!important;
	}

	a.print-qr-code.m-right {
		margin-right: 30px!important;
	}

	li {
		display: flex;
		flex-direction: column;
		background: #005281;

		border-radius: 0px;
		padding: 20px;

		img {
			align-self: center;
			max-width: 250px;
		}

		> strong {
			font-size: 16px;
			line-height: 20px;
			color: #fff;
			margin-top: 5px;
			text-align: center;
		}

		> span {
			font-size: 21px;
			font-weight: bold;
			margin: 20px 0 20px;
			color: #fff;

		}

		button {
			background: #7159c1;
			color: #fff;
			border: 0;
			border-radius: 4px;
			overflow: hidden;
			margin-top: auto;

			display: flex;
			align-items: center;

			transition: background 0.2s;

			&:hover {
				background: ${darken(0.03, '#7159c1')};
			}

			div {
				display: flex;
				align-items: center;
				padding: 12px;
				background: rgba(0, 0, 0, 0.1);

				svg {
					margin-right: 5px;
				}
			}

			span {
				flex: 1;
				text-align: center;
				text-transform: uppercase;
			}
		}
	}

	div.ui.attached.tabular.menu {
		display: flex;
		justify-content: center;
		margin-top: 15px;
	}
	li > strong.product_title {
		font-size: 25px;
		padding: 10px;
	}
	li>.product_price_full {
		font-size: 25px;
		padding: 10px;
		text-decoration: underline!important;
	}
	li > strong.product_price_parcel {
		font-size: 25px;
		padding: 10px;
		border: 1px solid #007EC5;
		background: #007EC5;
		border-radius: 50px;
		width: 30%;
		line-height: 35px;
		margin: 0 auto;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	li > strong.product_description_resume {
		font-size: 25px;
		padding: 10px;
	}
	
`;

export const Detalhes = styled.div`
	.ui.attached.tabular.menu {
		background: #005281;
		margin-top: 0px!important;
		padding-top: 10px!important;
	}
	a.title_tab {
		color: #fff!important;
		background: #007EC5!important;
		font-size: 20px;
	}
	.ui.tabular.menu .active.item {
		background: #0C3147!important;
	}
	.ui.bottom.attached {
		background: #0C3147!important;
		color: #fff!important;
		font-weight: 700!important;
		font-size: 18px!important;
		line-height: 30px!important;
	}
`;

