export function throttle(func, delay) {
	if (typeof func !== 'function') {
		return;
	}
	let lastRun = new Date().getTime();
	return function () {
		let currTime = new Date().getTime();
		if (currTime - lastRun < delay) {
			console.log('not run');
			return;
		}
		lastRun = currTime;
		func(...arguments);
	};
}

export function checkCollision(firstElement, secondElement) {
	let firstYStart = firstElement.offsetTop;
	let firstYEnd = firstElement.offsetTop + firstElement.offsetHeight;
	let firstXStart = firstElement.offsetLeft;
	let firstXEnd = firstElement.offsetLeft + firstElement.offsetWidth;
	let secondYStart = secondElement.offsetTop;
	let secondYEnd = secondElement.offsetTop + firstElement.offsetHeight;
	let secondXStart = secondElement.offsetLeft;
	let secondXEnd = secondElement.offsetLeft + secondElement.offsetWidth;
	if (
		((firstXStart >= secondXStart && firstXStart <= secondXEnd) ||
			(firstXEnd >= secondXStart && firstXEnd <= secondXEnd)) &&
		((firstYStart >= secondYStart && firstYStart <= secondYEnd) ||
			(firstYEnd >= secondYStart && firstYEnd <= secondYEnd))
	) {
		return true;
	}
	return false;
}

export function getRandomNumber(min, max, includeMax) {
	return Math.floor(Math.random() * (max - min + includeMax)) + min;
}
