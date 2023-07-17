// Kalian harus menjalankan nya satu persatu, boleh di comment jika salah satunya ingin dijalankan
// ada 2 program disini yaitu:

import winston from "winston"; //Kode dimulai dengan mengimpor library winston.

//  1. "logging with printf format"

//  Selanjutnya, logger dibuat dengan level "info", 
// format: winston.format.combine(winston.format.timestamp(), 
// winston.format.ms()), 
// dan transports: new winston.transports.Console({}) 
const logger = winston.createLogger({
    level: "info",
    // format: winston.format.json(),
    // format: winston.format.simple(),
    // format: winston.format.logstash(),
    format: winston.format.printf(log => {
        return `${new Date()} : ${log.level.toUpperCase()}: ${log.message}`;
    }),
    transports: [
        new winston.transports.Console({})
    ]
});

// Selanjutnya, logger mencatat beberapa pesan ke konsol menggunakan info("Hello Format"), 
// warn("Hello Format"), 
// dan error("Hello Format").
logger.info("Hello Format");
logger.warn("Hello Format");
logger.error("Hello Format");

// Kode mencatat log berikut: { "timestamp": "2018-07-03T19:26:27,813Z", "ms": 14, "json": {}, "level":"info","transports":[ ] }


// 2. "logging with format" 

// Kode dimulai dengan membuat objek logger dengan level yang disetel ke "info".
const logger = winston.createLogger({
    level: "info",
    // format: winston.format.json(),
    // format: winston.format.simple(),
    format: winston.format.logstash(), // Formatnya diatur ke winston.format.json(), yang akan menampilkan data JSON,
    // dan transport diatur ke winston.transports.Console({}) 
    // baru yang akan menampilkan log konsol pada baris perintah menggunakan kelas transport Konsol Winston.
    transports: [
        new winston.transports.Console({})
    ]
});
// Kode kemudian memanggil logger.info("Hello Format") yang menampilkan pesan info dengan "Hello Format" sebagai nilai teksnya
logger.info("Hello Format");
// Kode membuat logger dengan properti berikut: level: "info" format: winston.format.json() transports: [new winston.transports.Console({})]