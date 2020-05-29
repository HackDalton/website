var tzSelect = document.getElementById("timezone-select")
var timezones = moment.tz.names();
var tzFormat = "h:mm:ss A"
var hostTz = "America/New_York"

for (var k in timezones) {
	var timezoneName = timezones[k];
	var opt = document.createElement('option');
	opt.value = timezoneName;
	opt.innerHTML = timezoneName;
	tzSelect.appendChild(opt);
}

var currentTz = moment.tz.guess()
tzSelect.value = currentTz;
updateAgenda();
updateClocks();

tzSelect.addEventListener("change", function () {
	currentTz = tzSelect.value;
	updateAgenda();
	updateClocks();
})

function updateAgenda() {
	localTimes = document.querySelectorAll(".tz-local");
	for (var i in localTimes) {
		timeSpan = localTimes[i]
		if (typeof timeSpan == "object") {
			timeSpan.innerText = moment.tz(timeSpan.dataset.time, hostTz).tz(currentTz).format(tzFormat)
		}
	}

	hostTimes = document.querySelectorAll(".time");
	for (var i in hostTimes) {
		timeSpan = hostTimes[i]
		if (typeof timeSpan == "object") {
			timeSpan.innerText = moment.tz(timeSpan.dataset.time, hostTz).format(tzFormat)
		}
	}
}

function updateClocks() {
	document.getElementById("new-york-time").innerText = moment().tz(hostTz).format(tzFormat)
	document.getElementById("your-time").innerText = moment().tz(currentTz).format(tzFormat)
}

setInterval(updateClocks, 1000)