import './App.css';
import Header from './components/header';

import Specials from './components/specials';
import Banner from './components/banner';
import { Routes, Route } from "react-router"
import AboutPage from "./pages/about_page";
import MenuPage from "./pages/menu_page";
import ReservationPage from "./pages/reservation_page";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Specials />
    </>
  );
}

export default App;
