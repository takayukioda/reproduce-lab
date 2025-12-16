import * as iconv from "iconv-lite";

console.log(iconv.decode(Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f]), 'win1251'));
