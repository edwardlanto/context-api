import React, { useContext, useState } from 'react';
import Banner from '../functional-components/Banner';
import { PhoneContext } from '../contexts/PhoneContext';
import { Link } from 'react-router-dom'

const Page = () => {
	const value = useContext(PhoneContext);
	const [title, nullTitle] = useState('Made Cooking Easy');
	const [heading, nullHeading] = useState('Get Delicious Recipe Inspirations');
	return (
		<div>
			<Banner title={title} heading={heading} />
			<div>
				<p>Your phone number is: {value[0] ? value[0]: 'Not available right now'}</p>
				<Link to="/">Go Back</Link>
			</div>
		</div>
	)
}
export default Page;