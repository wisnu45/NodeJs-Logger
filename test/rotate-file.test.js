import winston from "winston"; //Kode dimulai dengan mengimpor library "winston".
import DailyRotateFile from "winston-daily-rotate-file"; //Kode dimulai dengan mengimpor library "winston-daily-rotate-file".
// Ini adalah labrary logging yang memungkinkan konfigurasi level log, transport, dan pengaturan lainnya 
// dengan mudah dan fleksibel.


// Selanjutnya, ia membuat objek logger dengan level info dan dua transport: satu transport konsol 
// (yang masuk ke baris perintah) dan transport DailyRotateFile lainnya 
// yang akan mengarsipkan semua outputnya ke file app-%DATE%.log dalam format zip.
const logger = winston.createLogger({
    level: "info",
    transports: [
        new winston.transports.Console({}),
        new DailyRotateFile({
            filename: "app-%DATE%.log",
            zippedArchive: true,
            maxSize: "1m",
            maxFiles: "14d" // Ini juga menentukan bahwa tidak boleh ada data lebih dari 14 hari yang disimpan dalam file ini.

        })
    ]
});

for (let i = 0; i < 100000; i++) { //Kode kemudian mengulangi lebih dari 100.000 kali untuk mencetak 
    //"Hello World 0", "Hello World 1", dll., pada setiap iterasi melalui loop.
    logger.info(`Hello World ${i}`);
}
// Kode ini adalah contoh sederhana tentang cara membuat logger yang mencatat informasi ke konsol.
// Kode di atas membuat instance winston dan menyetel level ke "info" dan kemudian menambahkan dua transport: satu untuk mencatat informasi ke konsol, 
//dan satu lagi untuk memasukkan informasi ke DailyRotateFile.
// Kode di atas membuat instance DailyRotateFile dengan beberapa parameter: nama file, zipArchive, maxSize, maxFiles.