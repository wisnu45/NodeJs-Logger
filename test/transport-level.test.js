import winston from "winston"; //Kode dimulai dengan mengimpor library winston
//  Ini adalah library logging yang memungkinkan Anda mencatat pesan dengan cara yang berbeda, seperti konsol, file, atau email.
// Selanjutnya, ia membuat instance logger dengan tiga properti: level (jenis pesan), 
// transports (daftar objek transport), dan opsi (objek yang berisi pengaturan konfigurasi).

const logger = winston.createLogger({
    level: "info",
    transports: [
        new winston.transports.Console({}),
        new winston.transports.File({
            filename: "application.log"
        }),
        new winston.transports.File({
            level: "error",
            filename: "application-error.log"
        }),
    ]
});
// Baris pertama mencatat "Hello World" ke konsol.
// Baris kedua mencatat "Hello World" ke file application-log.txt .
// Baris ketiga mencatat "Hello World" ke alamat email hello@example.com .
// Kode ini dimaksudkan untuk mencatat pesan berikut: Halo World Halo World Halo World Halo Error
logger.info("Hello World");
logger.info("Hello World");
logger.info("Hello World");
logger.info("Hello World");
logger.error("Hello Error");
logger.error("Hello Error");
logger.error("Hello Error");