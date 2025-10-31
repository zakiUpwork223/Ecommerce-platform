# Project Demo

This is a test project for full stack + blockchain developers

## Getting Started

Design and implement a small, self‑contained enhancement to this app to demonstrate full‑stack skills, code quality, and UX judgment. Keep scope tight; prefer clear, well‑tested code over breadth.


## What you will build

Enable crypto payment using MetaMask:

- Add MetaMask account connection
- "Today's ETH price" toggle button
- Show the MetaMask address of the server

## Detailed documents

https://docs.google.com/document/d/117Z5_tMnUQD5ke62rJsk42Gx97g60zbrNA2sqmj0rpQ/edit?tab=t.0

## How To Install
```sh
$ npm install --legacy-peer-deps
$ npm start
```

## Environment Variables
Create a `.env` file in the project root:

```env
DATABASE=<your-mongodb-connection-uri>
ETH_RECEIVER_ADDRESS=0xYourServerWalletAddressHere
```

For the client to reach the API, set in your shell (or create `.env` in `src` with CRA conventions if desired):

```sh
export REACT_APP_API_URL=http://localhost:8000
```

## Crypto Payments (MetaMask)
This app now includes a basic crypto payment option alongside existing PayPal/card checkout.

- Connect MetaMask wallet from the Checkout page.
- Fetch and display today's ETH price (from CoinGecko).
- Display the server's recipient ETH address fetched from the backend.

### Backend
- New route: `GET /api/crypto/address` returns `{ address: string }` from `ETH_RECEIVER_ADDRESS`.
- New model: `server/models/cryptoPayments.js` for recording crypto transactions (not yet wired into flows).

### Frontend
- My Account page shows:
  - "Connect Wallet" button (MetaMask)
  - "Today's ETH Price" button
  - "Send ETH to this address" (server wallet) with copy

## Testing Steps
1. Install MetaMask in your browser and create/select an account.
2. Start the app: `npm start` (runs API and React app). Ensure `REACT_APP_API_URL` points to the API origin.
3. Go to My Account.
4. Click "Connect Wallet". Your address should appear if connection succeeds.
5. Click "Today's ETH Price". Current ETH/USD should display.
6. The recipient server wallet address should be visible; copy and send ETH manually if desired.

Notes:
- MetaMask requires HTTPS or `http://localhost`.
- CoinGecko is used for price (`/simple/price?ids=ethereum&vs_currencies=usd`).
- Sensitive values (server wallet, DB URI) are provided via `.env`.
