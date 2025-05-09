const { personNames } = require("./names");
const { personHobbies } = require("./hobbies");

const person = () => {
  const actualName = personNames("Andrea", "Moretti");
  const actualHobbies = personHobbies("training", "videogames", "music");
  return { actualName, actualHobbies };
};

const actualPerson = person();
console.log(actualPerson);
