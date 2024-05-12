// const express = require("express");

// const app = express();

// app.get("/health-checkup", (req, res) => {
//   const kidneyId = req.query.kidneyId;
//   const username = req.headers.username;
//   const password = req.headers.password;
//   console.log(username, kidneyId, password);
//   if (!(username == "harkirat" && password == "pass")) {
//     res.status(403).json({
//       msg: "Incorrect inputs",
//     });
//   }

//   if (kidneyId != 1 && kidneyId != 2) {
//     res.status(403).json({
//       msg: "Incorrect inputs",
//     });
//   }

//   res.send("works ok");
// });

// app.listen(3000, () => {
//   console.log("listening now");
// });

const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());
//refer to notes for next
app.post("/test", (req, res, next) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  res.send({
    response,
  });
});

app.listen(3000, () => {
  console.log("listening now");
});
