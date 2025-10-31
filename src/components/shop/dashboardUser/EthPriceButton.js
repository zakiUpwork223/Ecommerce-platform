import React, { useState } from "react";

const EthPriceButton = () => {
  const [ethPrice, setEthPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch ETH price
  const fetchEthPrice = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
      );
      const data = await response.json();
      setEthPrice(data.ethereum.usd);
    } catch (err) {
      console.error("Error fetching ETH price:", err);
      setError("Failed to fetch ETH price. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white shadow-md border border-gray-200 rounded-lg mb-6">
      <div className="p-5 flex flex-col items-center text-center">
        <h3 className="text-lg font-semibold mb-2">📈 ETH Price Tracker</h3>
        <p className="text-gray-500 text-sm mb-4">
          Click below to see the current Ethereum price in USD.
        </p>

        <button
          onClick={fetchEthPrice}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md transition-all duration-200"
          disabled={loading}
        >
          {loading ? "Fetching..." : "Today's ETH Price"}
        </button>

        {ethPrice && (
          <div className="mt-4 bg-blue-100 border border-blue-300 text-blue-800 text-sm rounded-md px-4 py-2 w-full text-center">
            💰 1 ETH = <strong>${ethPrice}</strong> USD
          </div>
        )}

        {error && (
          <div className="mt-4 bg-red-100 border border-red-300 text-red-800 text-sm rounded-md px-4 py-2 w-full text-center">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default EthPriceButton;
