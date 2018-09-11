let intervalId, updateTimeCallback;

function tick() {
	intervalId = requestAnimationFrame(() => {
		callEventListener();
		tick();
	});
}

function callEventListener() {
	if (typeof updateTimeCallback === 'function') {
		updateTimeCallback(new Date);
	}
}

export function ontick(eventListener) {
	if (typeof eventListener === 'function') {
		updateTimeCallback = eventListener;
	} else {
		updateTimeCallback = undefined;
	}
}

export function start() {
	callEventListener();
	tick();
}

export function stop() {
	clearInterval(intervalId);
}

