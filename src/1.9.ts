{
  //Type Alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };
  const student1: Student = {
    name: "Ayan",
    age: 22,
    gender: "Male",
    address: "Rangpur",
    contactNo: "01717123456",
  };

  const student2: Student = {
    name: "Shakib",
    age: 22,
    gender: "Male",
    address: "Dhaka",
  };
  const student3: Student = {
    name: "Rakibul",
    age: 22,
    gender: "Male",
    address: "Dhaka",
    contactNo: "01717123456",
  };
  type UserName = string;
  type IsAdmin = boolean;
  type Add = (num1: number, num2: number) => number;

  const userName: UserName = "Ayan";
  const isAdmin: IsAdmin = true;
  const add: Add = (num1, num2) => num1 + num2;

  console.log(add(1, 9));
}
