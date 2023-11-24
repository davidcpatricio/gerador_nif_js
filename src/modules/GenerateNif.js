import ValidateNif from "./ValidateNif";

export default class GenerateNif {
  rand(min = 10000000, max = 99999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  };

  generateNewNif() {
    const partialNif = this.rand();
    const controlDigit = ValidateNif.createDigit(partialNif);
    const newNif = partialNif + controlDigit;
    return newNif;
  }
};