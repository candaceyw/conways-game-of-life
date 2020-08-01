export const speedUp = (Speed, setSpeed, setSpeedDisplay) => {
	if (Speed === 100) {
		setSpeed(Speed);
	} else if (Speed > 100) {
		setSpeed((s) => s - 100);
		setSpeedDisplay((c) => c + 1);
	}
};

export const slowDown = (Speed, setSpeed, setSpeedDisplay) => {
	if (Speed === 1000) {
		setSpeed(Speed);
	} else if (Speed <= 1900) {
		setSpeed((s) => s + 100);
		setSpeedDisplay((c) => c - 1);
	}
};
