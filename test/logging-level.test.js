// Kalian harus menjalankan nya satu persatu, boleh di comment jika salah satunya ingin dijalankan
// disini memiliki 2 proggram yaitu: 

import winston from "winston";

// 1. create new logger with console transport"

// Kode membuat objek logger dan menetapkannya ke variabel yang disebut "logger".
const logger = winston.createLogger({
    level: "debug", // Level pesan yang dicatat oleh logger ini diatur ke "debug", 
    // yang berarti bahwa semua pesan akan dicatat pada level debug.
    transports: [
        new winston.transports.Console({}) // Propertis transports adalah array objek, 
        // masing-masing mewakili transportasi.
    ]
});
//  Transport mewakili bagaimana pesan logging harus diformat untuk output di konsol atau sistem file.
// Dalam hal ini, ada dua transport: satu untuk keluaran konsol dan satu untuk keluaran sistem file.
// Kode mencatat pesan debug, lalu peringatan, pesan info, dan terakhir pesan HTTP.    

logger.log({ level: "error", message: "Hello Error" });
logger.log({ level: "warn", message: "Hello Warn" });
logger.log({ level: "info", message: "Hello Info" });
logger.log({ level: "http", message: "Hello HTTP" });
logger.log({ level: "verbose", message: "Hello Verbose" });
logger.log({ level: "debug", message: "Hello Debug" });
logger.log({ level: "silly", message: "Hello Silly" });


// 2. logging with shortcut function"

// Kode membuat objek logger yang memiliki 7 tingkat logging yang berbeda.
// Level diatur ke "debug" dan transport diatur ke konsol, yang mencatat pesan di terminal.
const logger = winston.createLogger({
    level: "debug",
    transports: [
        new winston.transports.Console({})
    ]
});
// Kode mencatat pesan berikut: debug: Halo Debug peringatkan: Halo Peringatkan info: Halo Info http: Halo HTTP verbose: Halo Verbose debug: Halo Debug
logger.error("Hello Error");
logger.warn("Hello Warn");
logger.info("Hello Info");
logger.http("Hello HTTP");
logger.verbose("Hello Verbose");
logger.debug("Hello Debug");
logger.silly("Hello Silly");