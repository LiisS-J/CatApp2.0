const Cat = require("../../models/cat");

async function showAllCats(req, res) {
  const cats = await Cat.find({});
  res.status(200).json(cats);
}

async function createACat(req, res) {
  console.log(req.body);
  //   req.body.imgUrl = req.body.url;
  const newCat = await Cat.create(req.body);
  res.status(201).json(newCat);
}

async function showCat(req, res) {
  const cat = await Cat.findById(req.params.id);
  res.status(200).json(cat);
}

async function updateCat(req, res) {
  const updatedCat = await Cat.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedCat);
}

async function deleteCat(req, res) {
  const deletedCat = await Cat.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedCat);
}

module.exports = {
  index: showAllCats,
  create: createACat,
  show: showCat,
  update: updateCat,
  delete: deleteCat,
};
