const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [new winston.transports.Console()],
});
// Kode tersebut membuat logger dengan level yang disetel ke "info", dan formatnya disetel ke json.
// Pengangkutan diatur ke Konsol, yang merupakan objek yang membuat keluaran konsol.
//  Kode membuat logger yang akan masuk ke konsol.