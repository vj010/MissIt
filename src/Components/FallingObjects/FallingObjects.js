import React, { useEffect, useRef } from 'react';
import { checkCollision } from '../../Utilities';
import './FallingObjects.css';

const FallingObjects = React.forwardRef((props, ref) => {
	let fallingObjRef = useRef();
	let gamePageRef = props.container;
	let collisionObject = props.collisionObject;
	useEffect(() => {
		fallingObjRef.current.style.left =
			Math.floor(Math.random() * gamePageRef.current.offsetWidth) + gamePageRef.current.offsetLeft + 'px';
		function fall(timestamp) {
			if (fallingObjRef.current && gamePageRef.current)
				if (fallingObjRef.current.offsetTop <= gamePageRef.current.offsetHeight) {
					fallingObjRef.current.style.top = fallingObjRef.current.offsetTop + 2 + 'px';
					if (checkCollision(fallingObjRef.current, collisionObject.current)) {
						fallingObjRef.current.style.display = 'none';
						// props.selfDestruct(props.index);
					} else {
						window.requestAnimationFrame(fall);
					}
				} else {
					// props.selfDestruct(props.index);
				}
		}
		window.requestAnimationFrame(fall);
	});
	return <div ref={fallingObjRef} className="fallingObject"></div>;
});

export default FallingObjects;
