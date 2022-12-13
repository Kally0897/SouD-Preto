const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();

const db = require("./config/database");
const userRoutes = require('./routes/userRoutes');
const cabeloRoutes = require("./routes/cabeloRoutes")
const lojaRoutes = require("./routes/lojaRoutes")
const salaoRoutes = require("./routes/salaoRoutes")

db.connect();

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/cabelos", cabeloRoutes );
app.use("/lojas", lojaRoutes);
app.use("/saloes", salaoRoutes)

// Criar rota geral a partir dos tipos de fio e a partir dele, conectar os salões e lojas
module.exports = app; 