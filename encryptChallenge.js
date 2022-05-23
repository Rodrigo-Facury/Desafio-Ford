const VIN_EXAMPLE = '4Y1SL65848Z411439';

const SECRET_KEY = 'Ford';

class Cryptography {
  encrypt(vin, key) {
    let encrypted = '';

    const vinCharacters = vin.split('');

    vinCharacters.forEach((char, index) => {
      const vinCharCode = char.charCodeAt();

      const analogueChar = key[index % key.length];

      const result = vinCharCode + analogueChar.charCodeAt();

      encrypted += String.fromCharCode(result);
    });

    return encrypted;
  }

  decrypt(cypher, key) {
    let decrypted = '';

    const vinCharacters = cypher.split('');

    vinCharacters.forEach((char, index) => {
      const vinCharCode = char.charCodeAt();

      const analogueChar = key[index % key.length];

      const result = vinCharCode - analogueChar.charCodeAt();

      decrypted += String.fromCharCode(result);
    });

    return decrypted;
  }
}


const cypher = new Cryptography().encrypt(VIN_EXAMPLE, SECRET_KEY);

console.log(new Cryptography().decrypt(cypher, SECRET_KEY));
