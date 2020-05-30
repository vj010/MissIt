import React, { useRef, useState, useEffect } from 'react';
import { throttle } from '../../Utilities';
import FallingObjects from '../FallingObjects/FallingObjects';
import './GamePage.css';
function GamePage(props) {
	let ballRef = useRef();
	let gamePageRef = useRef();

	const [fallingObjects, setFallingObjects] = useState([]);
	const [addFallingObject, setAddFallingObject] = useState([0]);

	function destroyFallingObject(ind) {
		let newFallingObjects = fallingObjects.filter((val, index) => index != ind);
		setFallingObjects([...newFallingObjects]);
	}

	useEffect(() => {
		setTimeout(() => {
			setFallingObjects([
				...fallingObjects,
				<FallingObjects
					container={gamePageRef}
					collisionObject={ballRef}
					key={fallingObjects.length}
					selfDestruct={destroyFallingObject}
					index={fallingObjects.length}
				/>,
			]);
			setAddFallingObject([(addFallingObject[0] + 1) % 2]);
		}, 1000);
	}, addFallingObject);

	function ballMotionHandler(e) {
		e.persist();
		let limit = 0;
		let event = e;
		let speed = 3;
		function moveBall(timeStamp) {
			if (
				event.keyCode === 39 &&
				ballRef.current.offsetLeft + ballRef.current.offsetWidth + speed < gamePageRef.current.offsetWidth
			) {
				ballRef.current.style.left = ballRef.current.offsetLeft + speed + 'px';
			} else if (event.keyCode === 37 && ballRef.current.offsetLeft > 0) {
				ballRef.current.style.left = ballRef.current.offsetLeft - speed + 'px';
			}
			limit++;
			if (limit < 10) window.requestAnimationFrame(moveBall);
		}
		window.requestAnimationFrame(moveBall);
	}

	return (
		<div ref={gamePageRef} tabIndex="0" className="gameFrame" onKeyDown={throttle(ballMotionHandler, 3)}>
			{/* <FallingObjects container={gamePageRef} collisionObject={ballRef} /> */}
			{fallingObjects}

			<div ref={ballRef} className="ball"></div>
		</div>
	);
}

export default GamePage;
