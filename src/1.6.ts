function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(1, 2);

const addArrow = (num1: number, num2: number): number => num1 + num2;
addArrow(1, 2);

const me = {
  name: "Ayan",
  balance: 1000,
  deposit(amount: number): string {
    return `My current balance is : ${(this.balance += amount)}`;
  },
};

me.deposit(1500);
console.log(me);

const arr: number[] = [1, 2, 3, 4, 5];
const newArr: number[] = arr.map((elem: number): number => elem * elem);
console.log(newArr);