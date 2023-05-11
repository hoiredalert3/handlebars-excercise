const express = require("express");
const app = express();
const port = process.env.PORT || 3000;



app.get("/", (req, res) => {
  //   res.send("Hello World!");
  res.sendFile(__dirname + "/html/index.htm");
});

app.listen(port, () => console.log(`server is listening on port ${port}!`));
