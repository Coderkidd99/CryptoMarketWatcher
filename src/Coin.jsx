import React from 'react'
import "./coin.css"


const coin = ({name, image, symbol, price, volume, ath, atl, rank, pricechange, marketcap}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
        <p className='coin-rank'>{rank}</p>
          <img src={image} alt='crypto' />
          <h1 className='coin-name'>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
          <div className='coin-data'>
            <p className='coin-price'>${price.toLocaleString()}</p>
            <p className='coin-marketcap'>${marketcap.toLocaleString()}</p>
            <p className='coin-volume'>${volume.toLocaleString()}</p>
            {pricechange < 0 ? (<p className='coin-change red'>{pricechange.toFixed(2)}%</p>) : (<p className='coin-change green'>{pricechange.toFixed(2)}%</p>)}
            <p className='coin-ath'>${ath.toLocaleString()}</p>
        
      
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default coin