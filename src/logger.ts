import { createLogger, format, transports } from "winston";

const logger = createLogger({
	level: 'info',
	// format: format.combine(
	// 	format.timestamp({
	// 		format: 'YYYY-MM-DD HH:mm:ss'
	// 	}),
	// 	format.errors({ stack: true }),
	// 	format.splat(),
	// ),
	format: format.combine(
		format.colorize(),
		format.simple()
	),
	transports: [
		new transports.File({ filename: 'logs/debug.log' })
	]
});

export default logger;