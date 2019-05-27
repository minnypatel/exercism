export class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    this.error = {
      name: 'illegal-triangle-error',
      message: 'this is not a valid triangle',
    };
  }

  isEquilateral() {
    return (this.sideA === this.sideB) && (this.sideB === this.sideC);
  }

  isIsosceles() {
    return (((this.sideA === this.sideB) && (this.sideB !== this.sideC))
    || ((this.sideA !== this.sideB) && (this.sideB === this.sideC))
    || ((this.sideA !== this.sideB) && (this.sideA === this.sideC)));
  }

  hasSidesWithNoLength() {
    return this.sideA <= 0 || this.sideB <= 0 || this.sideC <= 0;
  }

  violatesTriangleInequality() {
    return this.sideA + this.sideB < this.sideC
      || this.sideA + this.sideC < this.sideB
      || this.sideB + this.sideC < this.sideA;
  }

  isDegenerate() {
    return this.sideA + this.sideB === this.sideC
      || this.sideA + this.sideC === this.sideB
      || this.sideB + this.sideC === this.sideA;
  }

  isImpossible() {
    return this.hasSidesWithNoLength()
    || this.violatesTriangleInequality()
    || this.isDegenerate();
  }

  kind() {
    if (this.isImpossible()) throw Error(this.error);
    if (this.isEquilateral()) return 'equilateral';
    if (this.isIsosceles()) return 'isosceles';
    return 'scalene';
  }
}
