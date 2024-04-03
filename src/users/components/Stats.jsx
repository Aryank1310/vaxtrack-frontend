import React, { useState, useEffect } from 'react';

const Stats = () => {
    const [totalVaccinations, setTotalVaccinations] = useState(0);
    const [vaccinationsToday, setVaccinationsToday] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the total vaccinations by 100 or set it to the target value if it's reached
            setTotalVaccinations(prevTotal => prevTotal < 4400 ? prevTotal + 100 : 4400);

            // Increment the vaccinations today by 100 or set it to the target value if it's reached
            setVaccinationsToday(prevToday => prevToday < 11900 ? prevToday + 100 : 11900);
        }, 10); // Interval duration in milliseconds

        // Clean up the interval when the component is unmounted or the data reaches the actual value
        return () => clearInterval(interval);
    }, []); // Empty dependency array to run the effect only once

    return (
        <div className="bg-[#093045] py-8 sm:py-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-12 text-center lg:grid-cols-3">
                    <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                        <dt className="text-base leading-7 text-white">Total Vaccinated</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{totalVaccinations.toLocaleString()}</dd>
                    </div>
                    <div className="m-auto flex max-w-xs flex-col">
                    <a href="/viewmore" className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-md">
                            View More
                        </a>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                        <dt className="text-base leading-7 text-white">Vaccinations Done today</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{vaccinationsToday.toLocaleString()}</dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default Stats;
