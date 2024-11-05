const express = require("express");
const app = express();
const port = 1000;
const path = require("path");

app.set("view engine", "hbs");

app.use("/assets/image", express.static("assets/image"));
app.use("/assets/css", express.static("assets/css"));
app.use("/assets/js", express.static("assets/js"));
app.set("views", path.join(__dirname, "assets/views"));

// routing
app.get("/", home);
app.get("/addproject", addProject);
app.get("/contact", contact);
app.get("/testimonial", testimonial);
app.get("/project/:id", project);

function home(req, res) {
  res.render("index");
}

function addProject(req, res) {
  res.render("addproject");
}

function contact(req, res) {
  res.render("contact");
}

function testimonial(req, res) {
  res.render("testimonial");
}

function project(req, res) {
  const id = req.params.id;

  res.render("project");
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
