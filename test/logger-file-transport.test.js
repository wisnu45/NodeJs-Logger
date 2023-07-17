import winston from "winston";
// Kode dimulai dengan mengimpor library winston.

// Kemudian ia membuat objek logger dengan level "info" dan mengangkutnya yaitu ; 
// console, file, dan file.
const logger = winston.createLogger({
    level: "info",
    transports: [ //   Kode menciptakan logger dengan tiga transportasi.
        // Transport pertama untuk pesan konsol, 
        // transport kedua untuk logging berbasis file, 
        // dan transport ketiga untuk file aya log.
        new winston.transports.Console({}),
        new winston.transports.File({
            filename: "application.log"
        }),
        new winston.transports.File({
            filename: "aya.log"
        }),
    ]
});

// Kode kemudian mencatat tiga pesan ke log aplikasi secara berurutan: 
// Hello World; Halo World; Halo World.
logger.info("Hello World");
logger.info("Hello World");
logger.info("Hello World");
logger.info("Hello World");