import React, { useEffect } from 'react'
import AI from '../assets/projects/AI-Image.png'
import blog from '../assets/projects/blog.png'
import chat from '../assets/projects/chat-app.png'
import crypto from '../assets/projects/crypto.png'
import neib from '../assets/projects/neib.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

function Portfolio() {
    const portfolios = [
        {
            id: 1,
            src: AI,
            demo: "https://fastidious-malasada-6cd1b4.netlify.app/",
            code: "https://github.com/Szczygiel29/MERN_AI_Image_Generation",
        },
        {
            id: 2,
            src: blog,
            demo: "",
            code: "https://github.com/Szczygiel29/ExpressReactMySQL-blog-app",
        },
        {
            id: 3,
            src: chat,
            demo: "",
            code: "https://github.com/Szczygiel29/mern-chat-app",
        },
        {
            id: 4,
            src: crypto,
            demo: "https://steady-quokka-6bbf45.netlify.app/",
            code: "https://github.com/Szczygiel29/Cryptocurrency-React",
        },
        {
            id: 5,
            src: neib,
            demo: "https://stellar-fox-28f991.netlify.app/",
            code: "https://github.com/Szczygiel29/neighbouring-country",
        },
    ];

    useEffect(() => {
        AOS.init({ duration: 2000, disable: 'mobile' })
    }, []);

    return (
        <div id="portfolio" className="font-sans bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Check out some of my work right here.  For more visit my <a href='https://github.com/Szczygiel29' target='_blank' rel="noreferrer" >GitHub</a>.</p>
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
                                <a href={portfolio.demo} target='_blank' rel="noreferrer">
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                        Demo
                                    </button>
                                </a>
                                <a href={portfolio.code} target='_blank' rel="noreferrer">
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Portfolio