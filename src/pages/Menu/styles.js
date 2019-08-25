import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
	list-style: none;

	li {
		display: flex;
		flex-direction: column;
		background: #097DB6;

		border-radius: 4px;
		padding: 20px;

		img {
			align-self: center;
			max-width: 250px;
		}

		> strong {
			font-size: 28px;
			line-height: 20px;
			color: #333;
			margin-top: 5px;
		}

		> span {
			font-size: 21px;
			font-weight: bold;
			margin: 5px 0 20px;
		}

		button {
			background: #005281;
			color: #fff;
			border: 0;
			border-radius: 4px;
			overflow: hidden;
			margin-top: auto;
			padding: 24px 24px;
			display: flex;
			align-items: center;
			font-size: 20px;
			transition: background 0.2s;

			&:hover {
				background: ${darken(0.03, '#005281')};
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
`;
