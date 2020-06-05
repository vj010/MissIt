import React from 'react';
import GameArea from '../GameArea/GameArea';
import EnergyMeter from '../EnergyMeter/EnergyMeter';
import './GameContainer.css';
function GameContainer(props) {
	return (
		<div className="game-container">
			<GameArea />
		</div>
	);
}

export default GameContainer;
