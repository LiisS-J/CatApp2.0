const Cat = require ('../../models/cat')


async function showAllCats(req, res) {
    const cats = await Cat.find({});
    res.status(200).json(cats)
}

async function createACat(req, res) {
    const newCat = await Cat.create(req.body);
    res.status(201).json(newCat); 
}

module.exports = {
    index: showAllCats,
    create: createACat
}