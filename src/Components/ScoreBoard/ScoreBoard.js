import React from 'react';
import Label from '../Label/Label';
import Stat from '../Stat/Stat';
import './ScoreBoard.css';

function ScoreBoard(props) {
	return (
		<div className="score-board">
			<Label text="Score" />
			<Stat text={props.stats.score} />
			<Label text="Level" />
			<Stat text={props.stats.level} />
		</div>
	);
}

export default ScoreBoard;
