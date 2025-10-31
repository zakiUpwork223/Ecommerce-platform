import React, { useState, useEffect } from "react";

const MetaMaskConnect = () => {
  const [account, setAccount] = useState("");

  // Connect wallet
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("🦊 MetaMask not found! Please install it.");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    } catch (error) {
      console.error("User rejected connection:", error);
    }
  };

  // Disconnect wallet manually
  const disconnectWallet = () => {
    setAccount("");
  };

  // Handle account changes / disconnects
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        setAccount(accounts[0] || "");
      });

      window.ethereum.on("disconnect", () => {
        setAccount("");
        alert("MetaMask disconnected!");
      });
    }
  }, []);

  return (
    <div className="w-full bg-white shadow-md border border-gray-200 rounded-lg mb-6">
      <div className="p-5 flex flex-col items-center text-center">
        <h3 className="text-lg font-semibold mb-2">🔗 MetaMask Wallet</h3>
        <p className="text-gray-500 text-sm mb-4">
          Connect your Ethereum wallet to link your account securely.
        </p>

        {!account ? (
          <button
            onClick={connectWallet}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-5 py-2 rounded-md transition-all duration-200"
          >
            🦊 Connect MetaMask
          </button>
        ) : (
          <>
            <button
              onClick={disconnectWallet}
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-5 py-2 rounded-md transition-all duration-200"
            >
              🔒 Disconnect
            </button>

            <div className="mt-4 bg-green-100 border border-green-300 text-green-800 text-sm rounded-md px-4 py-2 w-full text-center break-all">
              ✅ Connected: <strong>{account}</strong>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MetaMaskConnect;
