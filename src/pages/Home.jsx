import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const URL = "https://api.coincap.io/v2/assets/";

export default function Home() {
    const  [coins, setCoins] = useState([]);
    const  [error, setError] = useState('');

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const res = await fetch(URL);
                if(!res.ok) throw new Error('Coins not found')
                const dataApi = await res.json();
                setCoins(dataApi.data)
            } catch (error) {
                setError(error.message);
            }
        }
        fetchCoins();
    },[])

    return (
        <>
            <h1 style={{ textAlign: 'center'}}>Coin List</h1>
            <div className={styles.container}>
            {error && <div className="error">{error}</div>}
                {coins.map(coin => (    
                    <span key={coin.id} className={styles.card_coin}>
                        <Link to={`/coin/${coin.id}`}>
                            <p>Name: {coin.name}</p>
                            <p>Symbol: {coin.symbol}</p>
                            <p>Price: ${parseFloat(coin.priceUsd).toFixed(2)}</p>
                        </Link>    
                    </span>
                ))}
            </div>
        </>
    )
}