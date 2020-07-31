import React, { createContext, useState } from 'react';

export const PhoneContext = createContext();

export const PhoneProvider = (props) => {
	const [ phone, setPhone ] = useState('');

	return <PhoneContext.Provider value={[ phone, setPhone ]}>{props.children}</PhoneContext.Provider>;
};
