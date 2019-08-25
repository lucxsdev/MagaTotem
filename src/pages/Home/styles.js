import styled from 'styled-components';

export const HomeButtons = styled.ul`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-gap: 20px;
	list-style: none;
    width: 70%;
    margin: 0 auto;
    padding-top: 30px;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #005281;
        padding: 15px;
    }

    div > span {
        color: #fff;
        font-size: 30px;
        font-weight: 700;
    }

    span {
        color: #fff;
        font-weight: 700;
        text-align: center;
        font-size: 28px;
    }

    div > svg {
        margin-left: 20px;
        border: 1px solid #027cc5;
        border-radius: 25px;
        padding: 7px;
        background: #027cc5;
    }
`;
