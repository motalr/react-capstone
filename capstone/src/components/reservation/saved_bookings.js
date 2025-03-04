import React from "react";

export default function SavedBookings({ bookings }) {
    console.log("bookings " + bookings.occation);
    return (
        <>
            <div className="container mx-auto px-4 py-4">
                <h1 className='text-3xl font-bold text-yellow-400 mt-5'>Bookings</h1>
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th class="px-6 py-3">Date</th>
                            <th class="px-6 py-3">Time</th>
                            <th class="px-6 py-3">Guests</th>
                            <th class="px-6 py-3">Occassion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(x =>
                        (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <td class="px-6 py-4">{x.date}</td>
                                <td class="px-6 py-4">{x.time}</td>
                                <td class="px-6 py-4">{x.guests}</td>
                                <td class="px-6 py-4">{x.occation}</td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>

            </div>
        </>
    )
}