import React from 'react';
import './FlashMessage.css';
function FlashMessage(props) {
	let className = 'flash-message ' + (props.animation ? props.animation : '');

	return (
		<div className={className} style={props.style}>
			{props.text}
		</div>
	);
}

export default FlashMessage;
