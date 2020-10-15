import React, { useContext, useState } from 'react';
import Banner from '../functional-components/Banner';
import { PhoneContext } from '../contexts/PhoneContext';
import { Link } from 'react-router-dom'
import "./index.css";

const Page = () => {
	const value = useContext(PhoneContext);
	const [title, nullTitle] = useState('Made Cooking Easy');
	const [heading, nullHeading] = useState('Get Delicious Recipe Inspirations');
	return (
		<div className="page">
			<Banner title={title} heading={heading} />
			<div className="container">
				<p className="page__text">Your phone number is: {value[0] ? value[0]: 'Not available right now'}</p>
				<Link to="/" className="button">Go Back</Link>
			</div>
		</div>
	)
}
export default Page;