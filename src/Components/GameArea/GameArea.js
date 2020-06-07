import React, { useEffect, useRef, useState, useReducer } from 'react';
import { throttle } from '../../Utilities';
import EnergyMeter from '../EnergyMeter/EnergyMeter';
import FallingObjects from '../FallingObjects/FallingObjects';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import { incrementGlobalSpeed } from '../../Application/Store';
import { resetGlobalSpeed } from '../../Application/Store';
import './GameArea.css';

const GameArea = React.memo(({ play }) => {
	let ballRef = useRef();
	let gameAreaRef = useRef();
	const [fallingObjects, insertFallingObjects] = useState([]);
	let initialState = {
		score: 0,
		level: 0,
		energy: 10,
		lastScore: 15,
	};

	let ballSpeed = 3;

	const [stats, changeStats] = useReducer((state, action) => {
		switch (action.type) {
			case 'INCREMENT_SCORE':
				let increaseSpeed = state.score == state.lastScore;
				if (increaseSpeed) {
					incrementGlobalSpeed();
					ballSpeed = Math.min(15, ballSpeed + 2);
				}
				return {
					...state,
					score: state.score + 1,
					level: increaseSpeed ? state.level + 1 : state.level,
					lastScore: increaseSpeed ? state.lastScore + state.level * 2 * 10 : state.lastScore,
				};
				break;
			case 'DECREMENT_ENERGY':
				state.energy === 0 ? insertFallingObjects([]) : '';
				return { ...state, energy: state.energy - 1 };
				break;
			case 'SET_LEVEL':
				return { ...state, level: 1 };
				break;
			case 'RESET':
				return { ...initialState };
				break;
			default:
				return state;
		}
	}, initialState);

	let fallingObjectsArr = [];

	useEffect(() => {
		if (play) {
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
			changeStats({ type: 'SET_LEVEL' });
			gameAreaRef.current.focus();
		} else {
			insertFallingObjects([]);
			changeStats({ type: 'RESET' });
			ballRef.current.style.left = gameAreaRef.current.offsetWidth / 2 - ballRef.current.offsetWidth / 2 + 'px';
		}
		resetGlobalSpeed();
	}, [play]);

	function ballMotionHandler(e) {
		e.persist();
		let limit = 0;
		let event = e;
		function moveBall(timeStamp) {
			if (
				event.keyCode === 39 &&
				ballRef.current.offsetLeft + ballRef.current.offsetWidth + ballSpeed < gameAreaRef.current.offsetWidth
			) {
				ballRef.current.style.left = ballRef.current.offsetLeft + ballSpeed + 'px';
			} else if (event.keyCode === 37 && ballRef.current.offsetLeft > 0) {
				ballRef.current.style.left = ballRef.current.offsetLeft - ballSpeed + 'px';
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
