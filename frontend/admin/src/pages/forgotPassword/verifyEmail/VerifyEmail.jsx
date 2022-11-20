import { useState } from 'react';
import { OtpForm } from './verifyEmailstyles';
import VerifyInput from '../verifyInput/VerifyInput';

const VerifyEmail = () => {
	const [otp, setOtp] = useState(new Array(4).fill(''));

	return (
		<OtpForm>
			<h2>Check your email</h2>
			<p>Please enter the 4-digit code we sent to </p>
			<p className='user'>kenechukwuezeofor@gmail.com</p>
			<div className='otpInputs'>
				<VerifyInput otp={otp} setOtp={setOtp} />
			</div>
			<p className='resend'>Resend Email</p>
			<p className='try'>Try another method</p>
		</OtpForm>
	);
};

export default VerifyEmail;
