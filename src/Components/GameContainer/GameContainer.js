import React from 'react';
import GameArea from '../GameArea/GameArea';
import EnergyMeter from '../EnergyMeter/EnergyMeter';
import './GameContainer.css';
import Button from '../Button/Button';
function GameContainer(props) {
	return (
		<div className="game-container">
			<GameArea />
			<div className="button-div">
				<center>
					<Button text="Play" style="active" />
					<Button text="Reset" />
				</center>
			</div>
		</div>
	);
}

export default GameContainer;
