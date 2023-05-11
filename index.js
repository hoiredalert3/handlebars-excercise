const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const expressHandlebars = require("express-handlebars");

const task1 = require("./routes/task1Route");
const task2 = require("./routes/task2Route");
const task3 = require("./routes/task3Route");
const task4 = require("./routes/task4Route");

app.use(express.static(__dirname + "/html"));
app.engine(
  "hbs",
  expressHandlebars.engine({
    layoutsDir: __dirname + "/views/layouts",
    defaultLayout: "layout",
    extname: "hbs",
  })
);

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/task1", task1);
app.use("/task2", task2);
app.use("/task3", task3);
app.use("/task4", task4);

app.listen(port, () => console.log(`server is listening on port ${port}!`));
