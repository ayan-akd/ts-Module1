const alpha1: string[] = ["A", "B", "C"];
const alpha2: string[] = ["D", "E", "F"];

alpha1.push(...alpha2);

const mentors1 = {
  typescript: "Tanmoy",
  redux: "Mofiz",
  dbms: "Mizan",
};
const mentors2 = {
  prisma: "Firoz",
  next: "Nahid",
};
const mentorList = {
  ...mentors1,
  ...mentors2,
};
console.log(mentorList);

const greetFriends = (...friends:string[]) =>{
   friends.forEach((friend:string)=>console.log(`Hi ${friend}`))
}

greetFriends("Ayan", "Shakib", "Rakib", "Rakibul");
