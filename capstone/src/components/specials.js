import React from "react";
import DishCard from '../components/dish_card';

export default function Specials() {
    return (
        <>
            <section className="specials">
                <div className='grid grid-flow-col items-center'>
                    <h1 className='col-span-8 font-bold text-4xl '>This Week's Specials!</h1>
                    <button className="col-span-4 focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 rounded-lg text-m px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Online Menu</button>
                </div>
                <div className="grid">
                    <DishCard data={
                        {
                            image: "/images/1.jpg",
                            imageAlt: "Greek Salad",
                            title: "Greek Salad",
                            price: "$12.99",
                            description: "A classic Greek salad with fresh ingredients."
                        }} />
                    <DishCard data={
                        {
                            image: "/images/3.jpg",
                            imageAlt: "Bruschetta",
                            title: "Bruschetta",
                            price: "$5.99",
                            description: "Grilled bread with garlic, salt, and olive oil."
                        }} />
                    <DishCard data={
                        {
                            image: "/images/1.jpg",
                            imageAlt: "Lemon Dessert",
                            title: "Lemon Dessert",
                            price: "$12.99",
                            description: "A classic dessert made from a grandma’s recipe book."
                        }} />
                </div>
            </section>
        </>
    )
}

