import { createBrowserRouter } from 'react-router-dom';
import Root from './Root.jsx';
import Home from './pages/Home.jsx'
import Coin from './pages/Coin.jsx'
import Error from './pages/Error.jsx'
import Favorites from './pages/Favorites.jsx';


const RoutesApp = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            { path: '/', element: <Home />},
            { path: '/coin/:id', element: <Coin />},
            { path: '/favorites', element: <Favorites />},
        ]
    }
])

export default RoutesApp