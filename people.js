const createName = require('./name.js');
const createHobbies = require('./hobbies.js');

function createPerson() {
    const fullName = createName('Marco', 'Torremacco');
    const hobbies = createHobbies('Chess', 'Soccer', 'Gaming');

    return {
        fullName: fullName,
        hobbies: hobbies
    };

}
createPerson()
const person = createPerson()
console.log(person)
