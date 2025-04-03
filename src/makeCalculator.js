'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  const systemObj = {
    result: 0,
    add: (value) => value,
    subtract: (value) => -value,
    multiply: (value, currentResult) => value * currentResult,
    divide: (value, current) => (value === 0 ? current : current / value),
    operate(callback, inputNum) {
      if (callback === this.multiply || callback === this.divide) {
        this.result = callback(inputNum, this.result);
      } else {
        this.result = this.result + callback(inputNum);
      }

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };

  return systemObj;
}

module.exports = makeCalculator;
