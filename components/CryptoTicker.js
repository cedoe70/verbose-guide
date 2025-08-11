import React, { useEffect, useState } from "react";

export default function CryptoTicker() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,dogecoin&order=market_cap_desc&per_page=4&page=1&sparkline=false"
        );
        const data = await res.json();
        setPrices(data);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black text-white py-2 overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap">
        {prices.map((coin) => (
          <div key={coin.id} className="mx-6 flex items-center space-x-2">
            <img src={coin.image} alt={coin.name} className="w-5 h-5" />
            <span>{coin.name}:</span>
            <span className="font-bold">${coin.current_price.toLocaleString()}</span>
            <span className={coin.price_change_percentage_24h >= 0 ? "text-green-400" : "text-red-400"}>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
