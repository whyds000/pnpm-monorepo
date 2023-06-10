import Decimal from 'decimal.js';



class Calculator {
  add(a: string, b: string, precision: number = 2): string {
    return new Decimal(a).plus(b).toFixed(precision);
  }

  subtract(a: string, b: string, precision: number = 2): string {
    return new Decimal(a).minus(b).toFixed(precision);
  }

  multiply(a: string, b: string, precision: number = 2): string {
    return new Decimal(a).times(b).toFixed(precision);
  }

  divide(a: string, b: string, precision: number = 2): string {
    if (new Decimal(b).isZero()) {
      throw new Error("Divide by zero error");
    }
    return new Decimal(a).dividedBy(b).toFixed(precision);
  }
}

const calculator = new Calculator();

export {calculator}
