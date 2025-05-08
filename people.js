const personNames = require("./names");
const personHobbies = require("./hobbies");

const person = () => {
  const actualNames = personNames;
  const actualHobbies = personHobbies;
  return { actualNames, actualHobbies };
};
personNames();
personHobbies();
person();
