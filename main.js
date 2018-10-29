let malik = {
  name: "Malik",
  age: 23,
  hobbies: "music, homework, lifting",
  height: "69 inches",
  from: "Caldwell",
  male: true,
  favoriteColor: "purple",
  familyMembers: []
}

let mom = {
  name: "Glenda",
  age: 54,
  hobbies: "music, homework, lifting",
  height: "65 inches",
  from: "Caldwell",
  male: false,
  favoriteColor: "purple",
  familyMembers: []
}

let lilBro = {
  name: "Nigel",
  age: 21,
  hobbies: "music, writing, Madden",
  height: "74 inches",
  from: "Georgia",
  male: true,
  favoriteColor: "red",
  familyMembers: []
}

let dad = {
  name: "Michael",
  age: 54,
  hobbies: "music, church, Dadding",
  height: "69 inches",
  from: "Georgia",
  male: true,
  favoriteColor: "black",
  familyMembers: []
}

let bigBro = {
  name: "Jamal",
  age: 30,
  hobbies: "music, writing, rapping",
  height: "72 inches",
  from: "Georgia",
  male: true,
  favoriteColor: "beige",
  familyMembers: []
}

let sister = {
  name: "Jasmyn",
  age: 31,
  hobbies: "mommin, politics",
  height: "65 inches",
  from: "Germany",
  male: false,
  favoriteColor: "purple",
  familyMembers: []
}


malik.familyMembers.push(mom, lilBro, bigBro, dad, sister);
mom.familyMembers.push(malik, bigBro, lilBro, dad, sister);
sister.familyMembers.push(malik, lilBro, bigBro, dad, mom);
bigBro.familyMembers.push(malik, lilBro, sister, dad, mom);
lilBro.familyMembers.push(malik, bigBro, sister, dad, mom);
dad.familyMembers.push(malik, lilBro, bigBro, sister, mom);


// let story = "My name is " + malik.name + ", I am " + malik.height + " tall and I am from " + malik.from + ". My hobbies included, but are not limited to " + malik.hobbies + ". My parents are " + malik.familyMembers.mom + " and " + malik.familyMembers.dad + ". I have two brothers, one younger, " + malik.familyMembers.lilBro + " and one older, " + malik.familyMembers.bigBro + ". My older sister, " + malik.familyMembers.sister + ", recently got married and I'm going to see her on Thanksgiving!"

let story2 = `My name is ${malik.name} and I am from ${malik.from}. I have ${malik.familyMembers.length + 1} members of my family. My sister, ${malik.familyMembers[4].name} actually just got married! I can't wait to spend Thanksgiving with her. I have two brothers, one younger; ${malik.familyMembers[1].name} and one older; ${malik.familyMembers[2].name}. My hobbies include, but are not limited to, ${malik.hobbies}. `

console.log(`Malik's Family: ${malik.familyMembers[0].name}`);
console.log(mom.familyMembers);

console.log(story2);

