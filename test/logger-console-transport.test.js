import winston from "winston";

test("create new logger with console transport", () => {

    const logger = winston.createLogger({
        transports: [
            // kita menggunakan atribut yang bernama transport ini adalah array

            new winston.transports.Console({}) // object transport dengan menggunakan konfigurasi kosong
        ]
    });

    logger.log({
        level: "info",
        message: "Hello Logging"
    });

});