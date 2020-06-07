import React, { useState } from 'react';
import Button from '../Button/Button';
import GameArea from '../GameArea/GameArea';
import './GameContainer.css';
function GameContainer(props) {
	const [play, playToggle] = useState(false);

	function buttonClickHandler() {
		playToggle(!play);
	}

	return (
		<div className="game-container">
			<GameArea play={play} />
			<div className="button-div">
				<center>
					<Button text={play ? 'Reset' : 'Start'} style={!play ? 'active' : ''} callback={buttonClickHandler} />
				</center>
			</div>
		</div>
	);
}

export default GameContainer;
