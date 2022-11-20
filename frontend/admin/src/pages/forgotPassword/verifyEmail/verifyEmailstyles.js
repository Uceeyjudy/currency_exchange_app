import styled from 'styled-components';

export const OtpForm = styled.form`
	font-size: clamp(0.9rem, 1.5vw, 1rem);
	background: #fff;
	border-radius: 7px;
	box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.05);
	-webkit-box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.05);
	-moz-box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.05);
	margin: 6rem auto 1rem auto;
	max-width: 505px;
	width: 90%;
	text-align: center;
	padding: 32px;
	h2 {
		margin-bottom: 1rem;
		font-size: clamp(1.5rem, 2vw, 1.75rem);
	}
	.user {
		margin-top: 0.5rem;
		font-weight: bold;
	}

	.resend {
		margin-bottom: 1.8rem;
	}
	.try,
	.resend {
		color: rgba(0, 98, 255, 1);
	}
`;
