import React from 'react';
import './Searchbox.css'

export const Searchbox = ({placeholder, handleChange}) => (

	<input
		className='search'
        type='search'
        placeholder={placeholder}
        onChange = {handleChange} />
);