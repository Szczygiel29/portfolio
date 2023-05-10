import React, { useEffect } from 'react'
import weather from '../assets/projects/weather.png'
import timer from '../assets/projects/timer.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Portfolio() {
    const portfolios = [
        {
            id: 1,
            src: weather,
        },
        {
            id: 2,
            src: timer,
        },
    ];

    useEffect(() => {
        AOS.init({duration: 2000})
    },[]);

    return (
        <div name="portfolio" className="font-sans bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
                    {portfolios.map(portfolio => (
                        <div key={portfolio.id} className="shadow-md shadow-gray-600 rounded-lg" data-aos="zoom-in">
                            <img
                                src={portfolio.src}
                                alt=''
                                className="h-64 object-cover rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Portfolio