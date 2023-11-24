export default class ValidateNif {
  constructor(sentNif) {
    Object.defineProperty(this, 'filteredNif', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: sentNif.trim()
    });
  };

  isSequence() {
    return this.filteredNif[0].repeat(9) === this.filteredNif;
  };

  generateNewNif() {
    const FirstEightDigits = this.filteredNif.slice(0, -1);
    const control_digit = ValidateNif.createDigit(FirstEightDigits);
    this.newNif = FirstEightDigits + control_digit;
  };

  static createDigit(splittedNif) {
    let total = 0;
    let reversedCounter = 9;

    for (let digit of splittedNif) {
      total += reversedCounter * Number(digit)
      reversedCounter--;
    };

    const remainder = total % 11;
    return remainder > 1 ? String(11 - remainder) : '0';
  };

  validate() {
    if (!this.filteredNif) return false;
    if (typeof this.filteredNif !== 'string') return false;
    if (this.filteredNif.length !== 9) return false;
    if (this.isSequence()) return false;

    const validationSets = {
      one: ['1', '2', '3', '5', '6', '8'],
      two: [
        '45', '70', '71', '72', '74', '75', '77', '78', '79',
        '90', '91', '98', '99'
      ]
    };

    if (
      !validationSets.one.includes(nif.substr(0, 1)) && 
      !validationSets.two.includes(nif.substr(0, 2))
    ) {
      return false;
    }
    
    this.generateNewNif();

    return this.newNif === this.filteredNif;
  };
};
