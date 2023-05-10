import React, { useEffect } from 'react'
import css from '../assets/css.png'
import github from '../assets/github.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-400"
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            src: react,
            title: "React",
            style: "shadow-blue-600"
        },
        {
            id: 5,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400"
        },
        {
            id: 6,
            src: node,
            title: "node",
            style: "shadow-green-500"
        },
        {
            id: 7,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400"
        },
    ];

    useEffect(() => {
        AOS.init({duration: 2000, disable: 'mobile'})
    },[]);

    return (
        <div id="experience" className="font-sans bg-gradient-to-b from-gray-800 to-black  text-white w-full h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Experience</p>
                    <p className="py-6">These are thechnologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-12 py-8 sm:px-0">
                    {techs.map(tech => (
                        <div key={tech.id} className={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg " + tech.style} data-aos="zoom-in">
                            <img
                                src={tech.src}
                                alt=""
                                className="w-20 mx-auto"
                            />
                            <p className="mt-4">{tech.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience