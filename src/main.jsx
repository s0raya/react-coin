import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesApp from './Routes.jsx'
import { RouterProvider } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={RoutesApp} />
    </React.StrictMode>
)
