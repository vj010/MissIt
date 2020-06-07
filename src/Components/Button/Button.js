import React from 'react';
import './Button.css';
function Button(props) {
	let className = 'button';
	function handleClick(e) {
		if (props.callback) {
			props.callback(e);
		}
	}
	return (
		<button
			className={props.style && props.style.toLowerCase() == 'active' ? className : className + ' button-inactive'}
			onClick={handleClick}
		>
			{props.text}
		</button>
	);
}

export default Button;
