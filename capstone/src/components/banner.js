import React from "react";

export default function DishCard({ data }) {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <h1 className='text-4xl font-bold text-yellow-400 mb-5'>Little Lemon</h1>
                    <h2 className='text-2xl text-white mb-5' >Chicago</h2>
                    <p className="text-white mb-5">We are a family-owned Mediterranean restaurant, focused on traditional recipes with a modern twist.</p>
                    <button className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300  rounded-lg text-m px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Reserve a Table</button>
                </div>
                <div className="banner-image">
                    <img src="/images/5.jpg" alt="Delicious food" />
                </div>
            </section>
        </>
    )
}