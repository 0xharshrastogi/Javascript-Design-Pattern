class FancyLogger {
	constructor() {
		if (FancyLogger.instance == null) {
			this.logs = [];
			FancyLogger.instance = this;
		}

		return FancyLogger.instance;
	}
	log(message) {
		this.logs.push(message);
		console.log(`${message}`);
	}

	printLogCount() {
		console.log(`${this.logs.length} Logs`);
	}
}
const logger = new FancyLogger();
console.log(logger);
Object.freeze(logger);
export default logger;
