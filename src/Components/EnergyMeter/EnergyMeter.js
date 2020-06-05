import React from 'react';
import Label from '../Label/Label';
import './EnergyMeter.css';
function EnergyMeter(props) {
	return (
		<div className="energy-meter">
			<Label text="Energy Meter" />

			<div className="power-level-1 first-power-level"></div>
			<div className="power-level-1"></div>
			<div className="power-level-1"></div>
			<div className="power-level-2 first-power-level"></div>
			<div className="power-level-2"></div>
			<div className="power-level-2"></div>
			<div className="power-level-2"></div>
			<div className="power-level-3 first-power-level"></div>
			<div className="power-level-3"></div>
			<div className="power-level-3"></div>
			<div className="power-level-3"></div>
		</div>
	);
}

export default EnergyMeter;
