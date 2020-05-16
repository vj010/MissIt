import React, { useRef } from 'react';
import './GamePage.css';
function GamePage(props) {
	let ballRef = useRef();
	function ballMotionHandler(e) {
		e.persist();
		let limit = 0;
		let event = e;
		function moveBall(timeStamp) {
			if (event.keyCode === 39) {
				// console.log('ballRef.current.style.left' + JSON.stringify(ballRef.current.offsetLeft));
				ballRef.current.style.left = ballRef.current.offsetLeft + 3 + 'px';
			} else if (event.keyCode === 37) {
				ballRef.current.style.left = ballRef.current.offsetLeft - 3 + 'px';
			}
			limit++;
			if (limit < 10) window.requestAnimationFrame(moveBall);
		}
		window.requestAnimationFrame(moveBall);
	}

	function throttle(func) {
		if (typeof func !== 'function') {
			return;
		}
		let lastRun = new Date().getTime();
		return function () {
			let currTime = new Date().getTime();
			if (currTime - lastRun < 2) {
				console.log('not run');
				return;
			}
			lastRun = currTime;
			func(...arguments);
		};
	}

	return (
		<div tabIndex="0" className="gameFrame" onKeyDown={throttle(ballMotionHandler)}>
			<div ref={ballRef} className="ball"></div>
		</div>
	);
}

export default GamePage;
