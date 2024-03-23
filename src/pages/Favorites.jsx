import { useEffect, useState } from "react";
import { Link } from  "react-router-dom";


export default function Favorites() {
    const [favCoins, setFavsCoins] = useState([]);

    useEffect(() => {
        const  getFavs = () => {
            if (localStorage.getItem("favCoins")){
                let favArray = JSON.parse(localStorage.getItem("favCoins"));
                setFavsCoins(favArray)
            } else {
                setFavsCoins([])
            }
        };
        
        getFavs();
    }, []);

    return (
        <>
            <h1>Favorites</h1>
            <div>
                {favCoins.length > 0 ? (
                    <ul>
                        {favCoins.map((favorite) => (
                            <li key={favorite}>
                            <Link to={`/coin/${favorite}`}>
                                {favorite}
                            </Link>    
                            </li>
                        ))}
                    </ul>
                ) : (<p>No favorite coins</p>)}

            </div>
        </>
    )
}