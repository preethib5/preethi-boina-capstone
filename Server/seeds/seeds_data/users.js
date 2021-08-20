
const bcrypt = require("bcryptjs")

function hashPassword(password){
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password,salt)
}

module.exports = [
  {
    Id: 1,
    FirstName: "Preethi",
    LastName: "Boina",
    Email: "pbachirbp@gmail.com",
    Password:hashPassword("password")
  },
  {
    Id: 2,
    FirstName: "P",
    LastName: "Boina",
    Email: "pboina@gmail.com",
    Password:hashPassword("password")
  },
];
