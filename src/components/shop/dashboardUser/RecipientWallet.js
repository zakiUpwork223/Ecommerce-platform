import React, { useEffect, useState } from "react";
import axios from "axios";

const RecipientWallet = () => {
  const [wallet, setWallet] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWalletAddress = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/crypto/address`
        );

        if (res.data.walletAddress) {
          setWallet(res.data.walletAddress);
        } else {
          setError("Wallet address not found!");
        }
      } catch (err) {
        console.error("Error fetching wallet address:", err);
        setError("Failed to load wallet address.");
      }
    };

    fetchWalletAddress();
  }, []);

  return (
    <div className="w-full bg-white shadow-md border border-gray-200 rounded-lg mb-6">
      <div className="p-5 flex flex-col items-center text-center">
        <h3 className="text-lg font-semibold mb-2">
          💰 Send ETH to this Address
        </h3>
        {wallet ? (
          <div className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-md px-4 py-2 w-full text-center break-all">
            {wallet}
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-300 text-red-800 text-sm rounded-md px-4 py-2 w-full text-center">
            {error}
          </div>
        ) : (
          <div className="text-gray-500 text-sm">Loading wallet address...</div>
        )}
      </div>
    </div>
  );
};

export default RecipientWallet;
