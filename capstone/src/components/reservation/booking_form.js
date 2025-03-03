import React, { useState } from "react";
import Modal from 'react-modal';

const submitAPI = function (formData) {
    return true;
};

Modal.setAppElement('#root');

export default function BookingForm({ availableTimes, dispatch }) {
    const occations = ["Birthday", "Anniversary"];
    const times = ["17:00", "18:00", "19:00", "20:00", "21:00", , "22:00"];
    const [modalIsOpen, setIsOpen] = React.useState(false);
    // console.log("available times: " + availableTimes);
    const today = new Date().toISOString().split("T")[0];


    const [date, setDate] = useState(today);
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(0);
    const [occation, setOccation] = useState("Birthday");

    const openModal = (e) => {
        e.preventDefault();
        setIsOpen(true);
    };

    const acceptModal = async () => {
        console.log("confirmed!");
        setIsOpen(false);

        const formData = { date, time, guests, occation };

        const success = await submitAPI(formData);
        if (success) {
            alert("Reservation confirmed!");
        } else {
            alert("Failed to reserve the table. Please try again.");
        }
    };

    const closeModal = () => {
        setIsOpen(false);
    };



    const handleGuestChange = (e) => {
        setGuests(e.target.value);
    }

    function handleOccationChange(e) {
        setOccation(e.target.value);
    }

    function handleDateChange(e) {
        const newDate = e.target.value;
        dispatch({ type: "UPDATE_TIMES", payload: newDate });
        setDate(e.target.value);
    }

    function handleTimeChange(e) {
        setTime(e.target.value);
    }

    return (
        <>
            <div className="container mx-auto px-4 py-4">
                <h1 className='text-4xl font-bold text-yellow-400 mb-5'>Reservation</h1>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                            Date
                        </label>
                        <input value={date} onChange={handleDateChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" placeholder="Date" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                            Time
                        </label>
                        <select value={time} onChange={handleTimeChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="time">
                            {times.map(x => <option key={x}>{x}</option>)}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="noOfGuests">
                            Number of Guests
                        </label>
                        <input value={guests} onChange={handleGuestChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="noOfGuests" type="number" placeholder="No. of Guests" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="occation">
                            Occation
                        </label>
                        <select value={occation} onChange={handleOccationChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="occation">
                            {occations.map(x => <option key={x}>{x}</option>)}
                        </select>
                    </div>
                    <button onClick={openModal} className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300  rounded-lg text-m px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Submit</button>
                </form>
            </div>
            <Modal
                isOpen={modalIsOpen}
                id="myModel"
                style={{
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                <div className="grid grid-flow-col grid-rows-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white row-start-1">
                        Confirm this booking
                    </h3>
                    <button onClick={closeModal} className="row-start-1 row-end-1 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>

                <div className="p-4 md:p-5 space-y-4">
                    <p className="text-base leading-relaxed text-black-500 dark:text-gray-400">
                        Confirm Booking this Reservation?
                    </p>
                </div>
                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button onClick={closeModal} className="mr-5 py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>
                    <button onClick={acceptModal} className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book</button>
                </div>
            </Modal>
        </>
    )
}