// logger menggunakan tanpa transport
import winston from "winston";

// Kode membuat objek logger dan mencatat pesan info.
const logger = winston.createLogger({});

// Kode membuat objek logger dengan opsi {level: "info", pesan: "Hello Logging"}.
logger.log({
    level: "info",
    message: "Hello Logging"
});
// Kode kemudian mencatat pesan ke objek logger dengan level "info" dan pesan "Hello Logging".