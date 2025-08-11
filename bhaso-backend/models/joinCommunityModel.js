// models/joinCommunityModel.js
const { Pool } = require("pg");
const slugify = require("slugify");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT || 5432,
});

async function insertContact({
  firstName,
  lastName,
  phone,
  email,
  subscribeNewsLetter,
}) {
  const slug = slugify(`${firstName} ${lastName}`, { lower: true });

  const query = `
    INSERT INTO contacts (firstname, lastname, phone, email, subscribenewsletter, slug)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  const values = [firstName, lastName, phone, email, subscribeNewsLetter, slug];

  const result = await pool.query(query, values);
  return result.rows[0];
}

module.exports = { insertContact };
