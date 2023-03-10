import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Coin from "./Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
      console.log(res.data);
    }).catch(err => console.log(err));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value)

  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );
  

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-title">Crypto Tracker</h1>
        <form>
        <input type="text" placeholder="search" className="search-input" onChange={handleChange}/>
        </form>
      </div>
      {filteredCoins.map(coin => {
        return(
          <Coin key={coin.id}
           rank={coin.market_cap_rank}
           name={coin.name}
           image={coin.image}
           symbol={coin.symbol}
           volume={coin.total_volume}
           marketcap={coin.market_cap}
           price={coin.current_price}
           ath={coin.ath}
           atl={coin.atl}
           pricechange={coin.price_change_percentage_24h}
           />
          
          
          

        )
      })}
    </div>
  );
}

export default App;
