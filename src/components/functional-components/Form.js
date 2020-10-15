import React, { useState, useContext } from 'react';
import { PhoneContext } from '../contexts/PhoneContext';

const Form = (props) => {
	const [ phoneNumber, setNumber ] = useState(() => '');
	const [ phone, setPhone ] = useContext(PhoneContext);
	const handleNumber = (e) => {
		setNumber(e.target.value);
	};

	const add = (e) => {
		e.preventDefault();

		// Check if its a phone number
		let reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phoneNumber);
		if (reg === true) {
			setPhone(() => phoneNumber);
			props.functions.history.push('/page');
		} else {
			props.toast(true);
		};
	};

	return (
		<form name="main-form" onSubmit={add}>
			<input type="text" className="phone" onChange={handleNumber} placeholder="Phone Number" />
			<button type="submit" className="button">Submit</button>
		</form>
	);
};

export default Form;
