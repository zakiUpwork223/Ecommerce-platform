const express = require("express");
const router = express.Router();
const { getWalletAddress } = require("../controller/cryptoController.js");

router.get("/address", getWalletAddress);

module.exports = router;
