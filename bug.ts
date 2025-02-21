function printNumber(num: number): void {
  console.log(num);
}

function isWithinRange(num: number): boolean {
  return num >= 10 && num <= 20;
}

const number = 15;

if (isWithinRange(number)) {
  printNumber(number);
} else {
  printNumber(0); //error here
}