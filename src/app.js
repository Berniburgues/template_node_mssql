const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();
const router = require("./routes");
const errorHandler = require("./utils/errorHandler");

// Aplicación:
const app = express();

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());

// Ruta raíz
app.use("/", router);

// Middleware luego de las Rutas
app.use(errorHandler);

module.exports = app;
