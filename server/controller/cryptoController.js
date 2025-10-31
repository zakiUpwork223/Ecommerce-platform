export const getWalletAddress = async (req, res) => {
  try {
    const walletAddress = process.env.SERVER_WALLET_ADDRESS;
    if (!walletAddress) {
      return res.status(500).json({ error: "Wallet address not configured" });
    }
    res.status(200).json({ walletAddress });
  } catch (error) {
    console.error("Error fetching wallet address:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
