class VigenereCipheringMachine {
    constructor(direction) {
        this.direction = direction;
        if (direction == undefined) this.direction = true;
    }

    encrypt(string, password) {
        let strUp = string.toUpperCase();
        let pswUp = password.toUpperCase();
        let newPswUp = '';
        let encrypt_string = '';
        if (strUp.length > pswUp.length) {
            for (let i = 0; i < strUp.replace(/[^A-Z]/g, '').length; i++) {
                newPswUp += pswUp[i % (pswUp.length)];
            }
        } else {
            newPswUp = pswUp;
        }
        let newPswUpArr = newPswUp.split('');
        for (let k = 0; k < strUp.length; k++) {
            encrypt_string += (
            strUp[k] == strUp[k].toLowerCase() ? strUp[k] :
                (String.fromCharCode((strUp.charCodeAt(k) + newPswUpArr.shift().charCodeAt(0)) % 26 + 65)) 
            );
        }
        return this.direction == true ? encrypt_string : encrypt_string.split('').reverse().join('');
    }

    decrypt(string, password) {
        let pswUp = password.toUpperCase();
        let strUp = string.toUpperCase();
        let newPswUp = '';
        let decrypt_string = '';
        if (strUp.length > pswUp.length) {
            for (let i = 0; i < strUp.replace(/[^A-Z]/g, '').length; i++) {
                newPswUp += pswUp[i % (pswUp.length)];
            }
        } else {
            newPswUp = pswUp;
        }
        let newPswUpArr = newPswUp.split('');

        for (let k = 0; k < strUp.length; k++) {
            decrypt_string += (
            strUp[k] == strUp[k].toLowerCase() ? strUp[k] :
                (String.fromCharCode((strUp.charCodeAt(k) +  26 - newPswUpArr.shift().charCodeAt(0)) % 26 + 65)) 
            );
        }
        return this.direction == true ? decrypt_string : decrypt_string.split('').reverse().join('')
    }
}


module.exports = VigenereCipheringMachine;
