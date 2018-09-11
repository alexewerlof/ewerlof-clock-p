let intervalId, updateTimeCallback;
let hour = 0;
let minute = 0;
let second = 0;

export function updateTime() {
	const now = new Date();
	second = now.getSeconds() + now.getMilliseconds() / 1000;
	minute = now.getMinutes() + second / 60;
	hour = now.getHours() + minute / 60;
}

function tick() {
	intervalId = requestAnimationFrame(() => {
		updateTime();
		tick();
		if (typeof updateTimeCallback === 'function') {
			updateTimeCallback();
		}
	});
}

export function ontick(eventListener) {
	if (typeof eventListener === 'function') {
		updateTimeCallback = eventListener;
	}
	else {
		throw new Error('motor event listener must be a function');
	}
}

export function start() {
	updateTime();
	tick();
}

export function stop() {
	clearInterval(intervalId);
}

export const getHour = () => hour;
export const getMinute = () => minute;
export const getSecond = () => second;
