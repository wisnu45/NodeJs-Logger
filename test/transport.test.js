import winston from "winston"; // Kode dimulai dengan mengimpor library winston.
import TransportStream from "winston-transport"
// Selanjutnya, itu mengimpor kelas transportasi yang disebut MyTransport dari library yang sama.
class MyTransport extends TransportStream {
    constructor(option) {
        // Konstruktor untuk kelas ini mengambil argumen opsi yang diteruskan ke super() 
        // untuk memanggil konstruktor induk dari TransportStream .
        super(option);
    }

    log(info, next) { //  Metode log mencatat pesan dengan new Date() , level , message dan next() .
        // Itu juga mencatat permintaan HTTP dengan http dan pencatatan verbose dengan verbose .
        console.log(`${new Date()} : 
                     ${info.level.toUpperCase()} : 
                     ${info.message}`);
        next()
    }
}
// Akhirnya, logging konsol dilakukan dengan menggunakan konsol sebagai awalan.
const logger = winston.createLogger({
    level: "silly",
    transports: [
        new MyTransport({})
    ]
});
logger.error("Hello Error");
logger.warn("Hello Warn");
logger.info("Hello Info");
logger.http("Hello HTTP");
logger.verbose("Hello Verbose");
logger.debug("Hello Debug");
logger.silly("Hello Silly");
// Kode akan mencatat sebagai berikut: Hello Error : Hello Error : 2018-01-02T00:00:00.000Z Hello Warn : Hello Warn : 2018-01-02T00:00:01.000Z Hello Info : Hello Info : 2018-01-02T00 :00:03.000Z Halo HTTP : Halo HTTP : 02-01-2018T00:00:04.000Z Halo Verbose : Halo Verbose :(2018-01-02T00:08)