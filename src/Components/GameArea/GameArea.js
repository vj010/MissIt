import React, { useRef, useState, useEffect } from 'react';
import { throttle } from '../../Utilities';
import FallingObjects from '../FallingObjects/FallingObjects';
import './GameArea.css';
function GameArea(props) {
	let ballRef = useRef();
	let gamePageRef = useRef();
	const [fallingObjects, insertFallingObjects] = useState([]);

	let fallingObjectsArr = [];

	useEffect(() => {
		for (let i = 0; i < parseInt(gamePageRef.current.offsetWidth / (2 * ballRef.current.offsetWidth)); i++) {
			fallingObjectsArr.push(
				<FallingObjects
					container={gamePageRef}
					collisionObject={ballRef}
					key={fallingObjectsArr.length}
					index={fallingObjectsArr.length}
					delay={(i * 1000) % 1500}
					slot={i}
					slotWidth={2 * ballRef.current.offsetWidth}
					slotMargin={ballRef.current.offsetWidth}
				/>
			);
		}
		insertFallingObjects(fallingObjectsArr);
	}, []);

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

export default GameArea;
