function produceDrivingRange(blockRange) {
	return function(start, end) {
		const distance = parseInt(end) - parseInt(start)
		const remainder = Math.abs(blockRange - distance)
		return blockRange >= distance ? `within range by ${remainder}` : `${remainder} blocks out of range`
	}
}

function produceTipCalculator(tip_percentage) {
	return function (price) {
		return price * tip_percentage
	}
}

function createDriver() {
	let DriverId = 0
	return class {
		constructor(name) {
			this.id = ++DriverId
			this.name = name
		}
	}
}