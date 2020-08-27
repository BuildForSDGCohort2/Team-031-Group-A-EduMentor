const {createLogger, format, transports} = require('winston');
const {combine, timestamp, label, prettyPrint} = format;
const path = require('path');

const createTransports = (config) => {
	const transportTypes = [];

	if(config.file) {
		transportTypes.push(
			new transports.File({
				filename: path.join('../logs', 'logs.txt'),
				level: config.level
			})
		);
	}

	if(config.console) {
		transportTypes.push(
			new transports.Console({
				level: config.level
			})
		);
	}

	return transportTypes;
}

module.exports = {
	create: (config) => {
		return new createLogger({
			transports: createTransports(config),
			format: combine(
				label({ label: 'BTC-Engine'}),
				timestamp(),
				prettyPrint()
			)
		});
	}
};