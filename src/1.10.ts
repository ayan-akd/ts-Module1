{
  //union types
  //union types are used when a value can be more than a single type.
  //such as when a property would be string or number
  type FrontEnd = "Fakibaz" | "FrontEnd";
  const newDeveloper: FrontEnd = "Fakibaz";
  type User = {
    name: string;
    age: number;
    email: string;
    gender: "male" | "female";
  };

  const user: User = {
    name: "Ayan",
    age: 22,
    email: "ayan@gmail.com",
    gender: "male",
  };

  type FrontEndDeveloper = {
    skills: string[];
    designation: "Junior" | "Senior";
  };

  type BackEndDeveloper = {
    skills: string[];
    designation: "Junior" | "Senior";
  };

  type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper;
  const fullStackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB"],
    designation: "Junior",
  };
}
