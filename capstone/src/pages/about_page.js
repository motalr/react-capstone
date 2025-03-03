import React from "react";
import Header from '../components/header';

export default function AboutPage() {
    return (
        <>
            <Header />
            <div className="container mx-auto px-4 py-4">
                <h1 className='text-4xl font-bold text-yellow-400 mb-5'>About</h1>
            </div>
        </>
    )
}