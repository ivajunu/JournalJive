const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

//Nedan är kod för att kunna logga in -Bella
app.post("/api/signin", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    res.status(200).send("Succesfully signed in");
  } else {
    res.status(401).send("Invalid credentials");
  }
});

app.listen(port, () => {
  console.log(`Välkommen till port ${port}`);
});
