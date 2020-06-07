import React from 'react';
import './Button.css';
function Button(props) {
	let className = 'button';
	return (
		<button
			className={props.style && props.style.toLowerCase() == 'active' ? className : className + ' button-inactive'}
		>
			{props.text}
		</button>
	);
}

export default Button;
