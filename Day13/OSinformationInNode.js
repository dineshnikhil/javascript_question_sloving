const os = require('os');

/**
 * os.type(): returns the operating system name.
 * os.freemem(): returns the amount of free system memory in bytes.
 * os.totalmem(): returns the total amount of system memory in bytes.
 * os.uptime(): returns the system uptime in seconds.
 */

/**
 * 1. Get the operating system name - Create a function getOsName() that returns the operating system name using os.type(). Export the function.
 *
 * 2. Calculate the free memory percentage - Create a function getFreeMemoryPercentage() that returns the percentage of free system memory (in decimal format, e.g., 0.5 for 50%). Use os.freemem() and os.totalmem() functions. Export the function.
 *
 * 3. Get the system uptime in minutes - Create a function getUptimeInMinutes() that returns the system uptime in minutes (rounded to the nearest integer). Use the os.uptime() function. Export the function.
 */

function getOsName() {
	return os.type();
}

function getFreeMemoryPercentage() {
	var free_per = os.freemem() / os.totalmem;
	return free_per.toFixed(2);
}

function getUptimeInMinutes() {
	var uptime = os.uptime() / 60;
	return uptime.toFixed();
}

getUptimeInMinutes();
