require('dotenv').config();
require('./config/database');

const Cat = require('./models/cat');

(async function() {

    await Cat.deleteMany({});
    const cats = await Cat.create([
        { ID: 93456365346e374, name: 'Sadie', sex: 'F', age: 2, breed: 'Mix'},
        { ID: 93456365346e374, name: 'Sadie', sex: 'F', age: 2, breed: 'Mix'},
        { ID: 93456365346e374, name: 'Sadie', sex: 'F', age: 2, breed: 'Mix'},
        { ID: 93456365346e374, name: 'Sadie', sex: 'F', age: 2, breed: 'Mix'},
        { ID: 93456365346e374, name: 'Sadie', sex: 'F', age: 2, breed: 'Mix'},
        { ID: 93456365346e374, name: 'Sadie', sex: 'F', age: 2, breed: 'Mix'},
        { ID: 93456365346e374, name: 'Sadie', sex: 'F', age: 2, breed: 'Mix'},
        { ID: 93456365346e374, name: 'Sadie', sex: 'F', age: 2, breed: 'Mix'},
        { ID: 93456365346e374, name: 'Sadie', sex: 'F', age: 2, breed: 'Mix'},
        { ID: 93456365346e374, name: 'Sadie', sex: 'F', age: 2, breed: 'Mix'},
    ]);

    console.log(cats);

    process.exit();
}) ();