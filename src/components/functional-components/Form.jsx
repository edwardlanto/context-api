import React, { useState, useContext } from 'react';
import { PhoneContext } from '../contexts/PhoneContext';

const Form = (props) => {
	const [ phoneNumber, setNumber ] = useState('');
	const [ errorBool, setError ] = useState(false);
	const [ phone, setPhone ] = useContext(PhoneContext);

	const handleNumber = (e) => {
		setNumber(e.target.value);
	};

	const notificationOpen = () => {
		alert('Please enter a valid phone number');

		// Set error boolean incase you need.

		setError(true);
	}

	const add = (e) => {
		e.preventDefault();
		let reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phoneNumber);
		if (reg === true) {
			setPhone(() => phoneNumber);
			props.functions.history.push('/page');
		} else {
			notificationOpen();
		}
	};

	return (
		<form name="main-form" onSubmit={add}>
			<input type="text" className="phone" onChange={handleNumber} placeholder="Phone Number" />

			<button type="submit">
				<img src={require('../../assets/icon.png')} /><span>Submit</span>
			</button>
		</form>
	);
};

export default Form;
