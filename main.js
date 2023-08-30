"use strict";

const broadCast = (messageInstructions) => {
	messageInstructions();
};

const announceRain = () => {
	console.log("Grab an umbrella. It's going to rain today.");
};

const announceClear = () => {
	console.log("It's going to be sunny and hot today.");
};

const weatherStation = (humidity) => {
	if (humidity >= 95) {
		return announceRain();
	} else {
		return announceClear();
	}
};

weatherStation(96);
weatherStation(26);
