const router = require("express").Router();

// Service Router

const serviceRouter = require("./services");

router.use("/", serviceRouter);

const partyRouter = require("./parties");

router.use("/", partyRouter);

module.exports = router;
