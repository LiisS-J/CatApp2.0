require("dotenv").config();
require("./config/database");

const Cat = require("./models/cat");
const User = require("./models/user");

(async function () {
  await Cat.deleteMany({});
  const cats = await Cat.create([
    { id: 93456365346e374, imgUrl: "https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", name: "Sadie", sex: "F", age: 2, breed: "Mix", health: "Great", adoptionStatus: "Available" },
    { id: 87645365346e374, imgUrl: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGNhdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", name: "Oscar", sex: "M", age: 4, breed: "Mix", health: "Great", adoptionStatus: "Available" },
    { id: 93456365346e374, imgUrl: "https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", name: "Sadie", sex: "F", age: 2, breed: "Mix", health: "Great", adoptionStatus: "Available" },
    { id: 93456365346e374, imgUrl: "https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", name: "Sadie", sex: "F", age: 2, breed: "Mix", health: "Great", adoptionStatus: "Available" },
    { id: 93456365346e374, imgUrl: "https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", name: "Sadie", sex: "F", age: 2, breed: "Mix", health: "Great", adoptionStatus: "Available" },
    { id: 93456365346e374, imgUrl: "https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", name: "Sadie", sex: "F", age: 2, breed: "Mix", health: "Great", adoptionStatus: "Available" },
    { id: 93456365346e374, imgUrl: "https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", name: "Sadie", sex: "F", age: 2, breed: "Mix", health: "Great", adoptionStatus: "Available" },
    { id: 93456365346e374, imgUrl: "https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", name: "Sadie", sex: "F", age: 2, breed: "Mix", health: "Great", adoptionStatus: "Available" },
    { id: 93456365346e374, imgUrl: "https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", name: "Sadie", sex: "F", age: 2, breed: "Mix", health: "Great", adoptionStatus: "Available" },
    { id: 93456365346e374, imgUrl: "https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", name: "Sadie", sex: "F", age: 2, breed: "Mix", health: "Great", adoptionStatus: "Available" },
  ]);

  await User.deleteMany({});
  const users = await User.create([
    {
      name: "Admin",
      email: "admin@mail.com",
      password: "admin",
      isAdmin: true,
    },
  ]);

//   console.log(cats);
//   console.log(users);

  process.exit();
})();
