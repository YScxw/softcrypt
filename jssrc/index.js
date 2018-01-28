var des = require('./des.js')
var sm4 = require('./sm4.js')

var softcrypt = {
    CalDES: des.CalDES,
    Cal919MAC: des.CalANSI919MAC,
    Cal99MAC: des.CalX99MAC,
    CalSM4: sm4.SM4CryptECB,
    CalSM4MAC: sm4.SM4MACGenerated
}

module.exports = softcrypt