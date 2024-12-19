import React, { useState, useEffect } from "react";

const apikey = "TJKT1ves";
const clientcode = "S492372";
const feedtype =
  "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlM0OTIzNzIiLCJpYXQiOjE3MzQ1ODQzNjIsImV4cCI6MTczNDY3MDc2Mn0.ptostzWE0LZBI8UfwQcqz6IzoLLyFgJse3ccYM1_viX2RaYHVU3iW_8lmv4CFe1bnHx7Sn9UxpGvaqZtda1AlA";

const fetch_url =
  "https://margincalculator.angelone.in/OpenAPI_File/files/OpenAPIScripMaster.json";

export default Symbol = ({ row, livePrice }) => {
  const [lastTradePric, setLastTradePric] = useState(0);

  const handleBuy = (symbol, ltp) => {
    console.log(`Buying ${symbol} at price ${ltp}`);
    // Implement your buy logic here (e.g., make an API call or update state)
  };

  const handleSell = (symbol, ltp) => {
    console.log(`Selling ${symbol} at price ${ltp}`);
    // Implement your sell logic here (e.g., make an API call or update state)
  };

  return (
    <tr>
      <td>{row.symbol}</td>
      <td>{livePrice}</td>
      <td>
        {/* Add Buy and Sell buttons for each row */}
        <button
          className="buy-button"
          onClick={() => handleBuy(row.symbol, lastTradePric)}
        >
          Buy
        </button>
        <button
          className="sell-button"
          onClick={() => handleSell(row.symbol, lastTradePric)}
        >
          Sell
        </button>
      </td>
    </tr>
  );
};
