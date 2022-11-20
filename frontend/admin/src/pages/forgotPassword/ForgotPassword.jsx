import { useState } from 'react';
import { Container } from './forgotPasswordStyles';
import VerifyEmail from './verifyEmail/VerifyEmail';
import Form from './form/Form';

const ForgotPassword = () => {
	const [verify, setVerify] = useState(false);
	const toggle = (input) => {
		if (input.length < 1) {
			alert("fields can't be empty");
		} else {
			setVerify(!verify);
		}
	};
	return (
		<Container>
			{!verify && <Form toggle={toggle} />}
			{verify && <VerifyEmail />}
		</Container>
	);
};

export default ForgotPassword;
