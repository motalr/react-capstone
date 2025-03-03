import React, { useReducer, useEffect } from "react";
import Header from '../components/header';
import BookingForm from "../components/reservation/booking_form";

const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(Date.parse(date));

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00');
        }
        if (random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const initializeTimes = async () => {
    console.log("initializeTimes ");
    const today = new Date().toISOString().split("T")[0];
    let times = await fetchAPI(today);
    console.log("times " + times);
    return times;
    // console.log("asdasdasdas " + asd);
    //return ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "6:00 PM", "7:00 PM"];
};

// Reducer function to update available times (for now, it returns the same list)
const updateTimes = async (state, action) => {
    const times = await initializeTimes();
    console.log("updated times: " + times);
    return times
};

export default function ReservationPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    return (
        <>
            <Header />
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </>
    )
}