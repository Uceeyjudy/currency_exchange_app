import { Container } from './formStyles';
import { useState } from 'react';

const Form = ({ toggle }) => {
	// const [reset, setReset] = useState(false);
	const [email, setEmail] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		// setEmail(email);
	};

	return (
		<Container>
			<form className='form' onSubmit={(e) => handleSubmit(e)}>
				<h2>Forgot password</h2>
				<div className='validateInput'>
					<label htmlFor='email'>Email</label>
					<input
						className='emailInput'
						type='email'
						id='email'
						placeholder='eg. mail@example.com'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<button className='button' onClick={() => toggle(email)}>
					Reset password
				</button>
			</form>
			<p>Don’t have an account? Sign up</p>
		</Container>
	);
};

export default Form;
