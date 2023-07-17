import winston from "winston"; // Kode dimulai dengan mengimpor labrary winston.

// Selanjutnya, logger dibuat dengan level "info", 
// format: winston.format.combine(winston.format.timestamp(), 
// winston.format.ms()), dan transports: new winston.transports.Console({}) 
// Selanjutnya, logger mencatat beberapa pesan ke konsol menggunakan info("Hello Format"), 
// warn("Hello Format"), dan error("Hello Format").
const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console({})
    ]
});

logger.info("Hello Format");
logger.warn("Hello Format");
logger.error("Hello Format");

// Kode mencatat log berikut: { "timestamp": "2018-07-03T19:26:27,813Z", "ms": 14, "json": {}, "level":"info","transports":[ ] }