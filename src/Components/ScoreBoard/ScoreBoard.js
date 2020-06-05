import React from 'react';
import Label from '../Label/Label';
import Stat from '../Stat/Stat';
import './ScoreBoard.css';

function ScoreBoard(props) {
	return (
		<div className="score-board">
			<Label text="Score" />
			<Stat text="4" />
			<Label text="Level" />
			<Stat text="1" />
		</div>
	);
}

export default ScoreBoard;
