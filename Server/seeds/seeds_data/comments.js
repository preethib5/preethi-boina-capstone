
const faker = require("faker");
module.exports = [
    {
      id: 1,
      name: faker.name.findName(),
      comment: "Book",
      likes: 1,
      image:faker.image.avatar(),
      post_id:2,
      blog_id:2
    },
    {
      id: 2,
      name: faker.name.findName(),
      comment: "Book",
      likes: 1,
      image:faker.image.avatar(),
      post_id:2,
      blog_id:2
    },
    {
      id: 3,
      name: faker.name.findName(),
      comment: "Book",
      likes: 1,
      image:faker.image.avatar(),
      post_id:3,
      blog_id:1

    },
    {
      id: 4,
      name: "Cece",
      comment: "Book",
      likes: 1,
      image:faker.image.avatar(),
      post_id:2,
      blog_id:3

    },
    {
      id: 5,
      name: "Roberto",
      comment: "Book",
      likes: 1,
      image:faker.image.avatar(),
      post_id:6,
      blog_id:3


    },
    {
      id: 6,
      name: "Erine",
      comment: "Book",
      likes: 1,
      image:faker.image.avatar(),
      post_id:8,
      blog_id:5

    },
    {
      id: 7,
      name: "Anvit",
      comment: "Book",
      likes: 1,
      image:faker.image.avatar(),
      post_id:7,
      blog_id:4

    },
    {
      id: 8,
      name: faker.name.findName(),
      comment: "Book",
      likes: 1,
      image:faker.image.avatar(),
      post_id:4,
      blog_id:1
    },
    {
      id: 9,
      name: faker.name.findName(),
      comment: "Book",
      likes: 1,
      image:faker.image.avatar(),
      post_id:5,
      blog_id:3
    },
    {
      id:10,
      name: faker.name.findName(),
      comment: "Book",
      likes: 1,
      image:faker.image.avatar(),
      post_id:6,
      blog_id:3
    },
  ];
  