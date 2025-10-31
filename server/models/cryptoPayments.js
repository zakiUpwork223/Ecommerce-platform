const mongoose = require("mongoose");

const cryptoPaymentSchema = new mongoose.Schema(
  {
    txHash: { type: String, required: true, unique: true, index: true },
    fromAddress: { type: String, required: true },
    toAddress: { type: String, required: true },
    amountEth: { type: Number, required: true },
    amountUsd: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["pending", "confirmed", "failed"],
      default: "pending",
    },
    chainId: { type: String, default: null },
  },
  { timestamps: true }
);

const cryptoPaymentModel = mongoose.model("cryptoPayments", cryptoPaymentSchema);
module.exports = cryptoPaymentModel;


