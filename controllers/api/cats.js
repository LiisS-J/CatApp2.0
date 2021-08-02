const Cat = require ('../../models/cat')


async function showAllCats(req, res) {
    const cats = await Cat.find({});
    res.status(200).json(cats)
}

module.exports = {
    index: showAllCats,
}