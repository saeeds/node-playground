  
const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer);
const dataJSON = dataBuffer.toString()
console.log(dataJSON);

const user = JSON.parse(dataJSON)
console.log(user);


user.name = 'Gunther'
user.age = 54

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)