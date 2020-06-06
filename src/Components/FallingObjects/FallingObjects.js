import React, { useEffect, useRef } from 'react';
import { checkCollision, getRandomNumber } from '../../Utilities';
import './FallingObjects.css';

const FallingObjects = React.forwardRef((props, ref) => {
	let fallingObjRef = useRef();

	let gamePageRef = props.container;
	let collisionObject = props.collisionObject;
	let minSlot = props.slot;

	useEffect(() => {
		fallingObjRef.current.style.left =
			getRandomNumber(
				props.slotWidth * props.slot,
				props.slotWidth * props.slot + props.slotWidth - props.slotMargin,
				0
			) + 'px';

		function fall(timestamp) {
			if (fallingObjRef.current && gamePageRef.current)
				if (fallingObjRef.current.offsetTop <= gamePageRef.current.offsetHeight) {
					fallingObjRef.current.style.top = fallingObjRef.current.offsetTop + props.stats.level * 2 + 'px';
					if (checkCollision(fallingObjRef.current, collisionObject.current)) {
						fallingObjRef.current.style.top = -1 * fallingObjRef.current.offsetHeight + 'px';
						fallingObjRef.current.style.left =
							getRandomNumber(
								props.slotWidth * props.slot,
								props.slotWidth * props.slot + props.slotWidth - props.slotMargin,
								0
							) + 'px';
						props.statBroadcaster({ type: 'DECREMENT_ENERGY' });
						setTimeout(() => {
							window.requestAnimationFrame(fall);
						}, Math.random() * props.delay);
					} else {
						window.requestAnimationFrame(fall);
					}
				} else {
					fallingObjRef.current.style.top = -1 * fallingObjRef.current.offsetHeight + 'px';
					fallingObjRef.current.style.left =
						getRandomNumber(
							props.slotWidth * props.slot,
							props.slotWidth * props.slot + props.slotWidth - props.slotMargin,
							0
						) + 'px';
					props.statBroadcaster({ type: 'INCREMENT_SCORE' });
					setTimeout(() => {
						window.requestAnimationFrame(fall);
					}, Math.random() * props.delay);
				}
		}
		setTimeout(() => {
			window.requestAnimationFrame(fall);
		}, props.delay);
	});
	return <div ref={fallingObjRef} className="fallingObject"></div>;
});

export default FallingObjects;
