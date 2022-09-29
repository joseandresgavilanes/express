const express = require("express");

const app = express();

app.get("/me", (request, response) => {
  console.log(request.method);
  response.status(200).json({
    name: "Jose Andres",
    age: "18",
    pais: "Ecuador",
    verb: request.method,
  });
});

app.post("/metas", (req, res) => {
  console.log(res.method);
  res.status(200).json({
    hobbies: ["Programar", "Leer", "Meditar"],
    verb: req.method,
  });
});

app.patch("/metas", (req, res) => {
  console.log(res.method);
  res.status(200).json({
    metas: ["Found my own company", "Became CTO in a big tech company"],
    verb: req.method,
  });
});

app.put("/business", (req, res) => {
  console.log(res.method);
  res.status(200).json({
    business: ["Google", "Amazon", "Microsoft"],
    verb: req.method,
  });
});

app.listen(8000, () => {
  console.log("Server started at port 8000");
});
