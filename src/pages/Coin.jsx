import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Coin() {
    const { id } = useParams();
    const URL = `https://api.coincap.io/v2/assets/${id}`;
    const [coin, setCoin] = useState(null);
    const [error, setError] = useState('');
    const [favCoins, setFavCoins] = useState([]);

    useEffect(() => {
        const  fetchData = async () => {
            try{
                const res = await fetch(URL);
                if (!res.ok) throw new Error('Coin not found');
                const data = await res.json();
                setCoin(data.data);
            } catch (error) {
                setError(error.message);
            };
        }
        fetchData();
    }, [id]);

    useEffect(() => {
        const favLocalStorage = JSON.parse(localStorage.getItem("favCoins")) || [];
        if(favLocalStorage.length > 0) {
            setFavCoins(favLocalStorage);
        }
    }, []);

    const handleToggleFavorite = () => {
        const updatedFavCoins = favCoins.includes(id);
        let newFavCoins;
        if(!updatedFavCoins){
            newFavCoins = [...favCoins, id]
        } else {
            newFavCoins = favCoins.filter(coinId => coinId !== id);
        }
        setFavCoins(newFavCoins);
        localStorage.setItem("favCoins", JSON.stringify(newFavCoins));
    }

    return (
        <div>
            { error && <h1>{error}</h1>}
            { coin && (
                <div>
                    <h2>{coin.name} ({coin.symbol})</h2>
                    <p>Price: ${parseFloat(coin.priceUsd).toFixed(2)}</p>
                    <button onClick={handleToggleFavorite}>
                        {favCoins.includes(id) ? 'Remove from' : 'Add to'} favorite
                    </button>
                </div>
            ) }
        </div>
    )
}