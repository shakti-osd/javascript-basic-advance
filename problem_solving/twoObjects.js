// Two Objects

const user1 = {
  name: "Jordan",
  age: 28,
};

const user2 = {
  name: "Jordan",
  age: 28,
};

console.log(user1 === user2); // because two different objects are not equal

const user3 = {
  name: "Jordan",
  age: 28,
};

const user4 = user3;

console.log(user3 === user4); // because user3 and user4 are now referencing the same object



const user5 = {
    name: "Jordan",
    age: 28,
  };
  
  const user6 = {
    name: "Jordan",
    age: 28,
  };


  console.log(JSON.stringify(user5) === JSON.stringify(user6))