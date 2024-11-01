{
  //ternary  || optional || nullish coalescing

  const age: number = 15;
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not Adult");
  }

  const isAdult = age >= 18 ? "Adult" : "Not Adult";
  console.log({ isAdult });

  //nullish coalescing
  const isAuthenticatedUser = "";
  const result1 = isAuthenticatedUser ?? "Guest";
  const result2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";
  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      state: string;
      country: string;
      postCode: number;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Ayan",
    address: {
      city: "Dhaka",
      state: "Dhaka",
      country: "Bangladesh",
      postCode: 1207,
      presentAddress: "Dhaka",
    },
  };
  const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanent Address";
  console.log({ permanentAddress });
}
