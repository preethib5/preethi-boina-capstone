
const bcrypt = require("bcryptjs")

function hashPassword(password){
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password,salt)
}

module.exports = [
  {
    id: 1,
    firstName: "Preethi",
    lastName: "Boina",
    email: "pbachirbp@gmail.com",
    password:hashPassword("password")
  },
  {
    id: 2,
    firstName: "P",
    lastName: "Boina",
    email: "pboina@gmail.com",
    password:hashPassword("password")
  },
];
