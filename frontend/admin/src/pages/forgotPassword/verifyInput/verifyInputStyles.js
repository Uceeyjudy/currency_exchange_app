import styled from 'styled-components';

export const Container = styled.section`
	.VerifyInput {
		margin: 1.8rem 0;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 5px;
		> * {
			text-align: center;
			width: 100%;
			padding: 1rem;
			font-size: 1rem;
			outline: none;
			border: 1px solid #cbd5e1;
			border-radius: 4px;
			:focus {
				border: 1px solid #3381ff;
			}
		}
	}
`;
