import styled from 'styled-components';

export const Container = styled.section`
	max-width: 505px;
	width: 90%;
	.form {
		width: 90%;
		padding: 32px;
		background: #ffffff;
		border-radius: 7px;
		box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.05);
		-webkit-box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.05);
		-moz-box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.05);
		h2 {
			margin-bottom: 1rem;
		}

		.emailInput,
		.button {
			display: block;
			margin-bottom: 1rem;
			width: 100%;
		}
		.emailInput,
		.button {
			padding: 1rem;
			outline: none;
			border: 1px solid #cbd5e1;
			border-radius: 4px;
			font-size: 1rem;
		}
		label {
			display: block;
			font-size: 0.85rem;
			margin-bottom: 5px;
		}

		button {
			background: #0062ff;
			color: white;
			cursor: pointer;
		}
	}
	p {
		margin-top: 1rem;
		text-align: center;
	}
`;
