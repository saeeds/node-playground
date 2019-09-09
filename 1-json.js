  
const fs = require('fs')

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJson =  JSON.stringify(book);
fs.writeFileSync('1-book-json.json',bookJson);
console.log(bookJson);

const parsedDate = JSON.parse(bookJson);
console.log(parsedDate);

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