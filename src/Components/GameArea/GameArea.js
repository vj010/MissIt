import React, { useEffect, useRef, useState, useReducer } from 'react';
import { throttle } from '../../Utilities';
import EnergyMeter from '../EnergyMeter/EnergyMeter';
import FallingObjects from '../FallingObjects/FallingObjects';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import './GameArea.css';

const GameArea = React.memo((props) => {
	let ballRef = useRef();
	let gameAreaRef = useRef();
	const [fallingObjects, insertFallingObjects] = useState([]);

	let initialState = {
		score: 0,
		level: 1,
		energy: 10,
	};

	const [stats, changeStats] = useReducer((state, action) => {
		switch (action.type) {
			case 'INCREMENT_SCORE':
				return {
					...state,
					score: state.score + 1,
					level: state.score && state.score % 100 == 0 ? state.level + 1 : state.level,
				};
				break;
			case 'DECREMENT_ENERGY':
				return { ...state, energy: state.energy - 1 };
				break;
			default:
				return state;
		}
	}, initialState);

	let fallingObjectsArr = [];

	useEffect(() => {
		for (let i = 0; i < parseInt(gameAreaRef.current.offsetWidth / (1.5 * ballRef.current.offsetWidth)); i++) {
			fallingObjectsArr.push(
				<FallingObjects
					container={gameAreaRef}
					collisionObject={ballRef}
					key={fallingObjectsArr.length}
					index={fallingObjectsArr.length}
					delay={(i * 1000) % 1800}
					slot={i}
					slotWidth={2 * ballRef.current.offsetWidth}
					slotMargin={ballRef.current.offsetWidth}
					statBroadcaster={changeStats}
					stats={stats}
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
				ballRef.current.offsetLeft + ballRef.current.offsetWidth + speed < gameAreaRef.current.offsetWidth
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
		<React.Fragment>
			<EnergyMeter energyLevel={stats.energy} />
			<div ref={gameAreaRef} tabIndex="0" className="gameFrame" onKeyDown={throttle(ballMotionHandler, 3)}>
				{fallingObjects}

				<div ref={ballRef} className="ball"></div>
			</div>
			<ScoreBoard stats={stats} />
		</React.Fragment>
	);
});

export default GameArea;
