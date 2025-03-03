import React from "react";
import Meta from '../components/meta';
export default function Header() {
    return (
        <>
            <Meta />
            <header className="header">
                <img src="/images/logo.jpg" id="logo" alt="logo" />
                <nav>
                    <a className="font-bold" href="/">Home</a>
                    <a className="font-bold" href="/about">About</a>
                    <a className="font-bold" href="/menu">Menu</a>
                    <a className="font-bold" href="/reservation">Reservations</a>
                    <a className="font-bold" href="/order">Order Online</a>
                    <a className="font-bold" href="/login">Login</a>
                </nav>
            </header>
        </>
    )
}