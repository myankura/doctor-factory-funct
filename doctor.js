console.log("doctor.js");

//part one of Doctor exercise.  (See README)
const createDoctor = (name, speciality, address) => ({
    "name": name,
    "speciality": speciality,
    "address": address
});

//part two of Doctor exercise. (See README)
const createPet = (name, breed) => ({
    "name": name,
    "breed": breed
});

const bowWowKennels = [];

//Invoke createPet three times
const pet1 = createPet("Race", "Labrador");
const pet2 = createPet("Roxy", "Beagador");
const pet3 = createPet("Riley", "Texas Healer");

//Push each new pet object into an array called bowWowKennels (see README)
bowWowKennels.push(pet1, pet2, pet3);
console.log(bowWowKennels);