export const globalSpeed = {
	speed: 2,
};

export function incrementGlobalSpeed() {
	globalSpeed.speed = Math.min(globalSpeed.speed + 2, 10);
}
