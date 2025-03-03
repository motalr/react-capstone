import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AboutPage from "./pages/about_page";
import MenuPage from "./pages/menu_page";
import ReservationPage from "./pages/reservation_page";
import OrderPage from './pages/order_page';
import LoginPage from './pages/login_page';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/menu", element: <MenuPage /> },
  { path: "/reservation", element: <ReservationPage /> },
  { path: "/order", element: <OrderPage /> },
  { path: "/login", element: <LoginPage /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
