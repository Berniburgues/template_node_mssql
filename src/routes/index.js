const express = require("express");
const userRouter = require("./user.routes");
const router = express.Router();

// Acá se colocan las rutas
router.use("/users", userRouter);

module.exports = router;
