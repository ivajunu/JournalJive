const express = require("express");
const router = express.Router();

const client = require('../connection');

router.get('/signin', async (req, res) => {
  const { rows } = await client.query('SELECT * FROM person_datas');
  console.log("Hämtar alla användare");
  res.send(rows);
});

// LOGIN
router.post('/signin', async (req, res) => {
  const person_username = req.body.person_username;
  const person_password = req.body.person_password;

  const postgres = `SELECT * FROM userInfo WHERE userEmail = $1`;
