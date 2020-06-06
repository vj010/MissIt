import React from 'react';
import Label from '../Label/Label';
import './EnergyMeter.css';
function EnergyMeter(props) {
	return (
		<div className="energy-meter">
			<Label text="Energy Meter" />

			<div className={props.energyLevel >= 10 ? 'power-level-1 green' : 'power-level-1 first-power-level'}></div>
			<div className={props.energyLevel >= 9 ? 'power-level-1 green' : 'power-level-1'}></div>
			<div className={props.energyLevel >= 8 ? 'power-level-1 green' : 'power-level-1'}></div>
			<div className={props.energyLevel >= 7 ? 'power-level-2 yellow' : 'power-level-2 first-power-level'}></div>
			<div className={props.energyLevel >= 6 ? 'power-level-2 yellow' : 'power-level-2'}></div>
			<div className={props.energyLevel >= 5 ? 'power-level-2 yellow' : 'power-level-2'}></div>
			<div className={props.energyLevel >= 4 ? 'power-level-2 yellow' : 'power-level-2'}></div>
			<div className={props.energyLevel >= 3 ? 'power-level-3 red' : 'power-level-3 first-power-level'}></div>
			<div className={props.energyLevel >= 2 ? 'power-level-3 red' : 'power-level-3'}></div>
			<div className={props.energyLevel >= 1 ? 'power-level-3 red' : 'power-level-3'}></div>
			<div className={props.energyLevel >= 0 ? 'power-level-3 red' : 'power-level-3'}></div>
		</div>
	);
}

export default EnergyMeter;
