import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hey Folks JavaScript are amazing! Javascript are using everywhere!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>Hi, I'm Tahmid Chowdhury. I am a Junior PERN Stack Developer with a 3-year background in Business Development and Support Engineering. I am shifting my career track to coding to build the foundation for my future tech startup. In-shaa-allah, I will be an entrepreneur and own a software company.</p>");
});

app.get("/services", (req, res) => {
  res.send("<h1>Our Services</h1><p>We provide a wide range of services to help you achieve your goals.</p>");
});

app.get("/portfolio", (req, res) => {
  res.send("<h1>My Portfolio</h1><p>Check out my work and projects.</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
