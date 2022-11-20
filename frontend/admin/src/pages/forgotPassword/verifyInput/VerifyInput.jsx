import React from 'react';
import { Container } from './verifyInputStyles';

const VerifyInput = ({ otp, setOtp }) => {
	const handleChange = (element, ind) => {
		if (element.value.length < 1) {
			otp[ind] = '';
			setOtp([...otp]);
			if (element.previousSibling) element.previousSibling.focus();
			return;
		}

		if (isNaN(element.value)) return false;

		setOtp([...otp.map((item, idx) => (idx === ind ? element.value : item))]);

		if (element.nextSibling) {
			element.nextSibling.focus();
		}
	};
	return (
		<Container>
			<div className='VerifyInput'>
				{otp.map((data, ind) => {
					return (
						<input
							className='inputSpace'
							type={'text'}
							name='otp'
							maxLength='1'
							tabIndex='1'
							key={ind}
							value={data}
							onChange={(e) => handleChange(e.target, ind)}
							onFocus={(e) => e.target.focus()}
						/>
					);
				})}
			</div>
		</Container>
	);
};

export default VerifyInput;
