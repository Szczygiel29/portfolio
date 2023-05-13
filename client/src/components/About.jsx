import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 2000, disable: 'mobile' })
    }, [])

    return (
        <div
            name="about"
            className="w-full min-h-screen flex-grow bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20 overflow-x-hidden" data-aos="fade-left">
                    I am an experienced Full Stack Developer with a degree in Petroleum and Gas Engineering from AGH University of 
                    Science and Technology. I work on my own programming projects and have expertise in both front-end and back-end 
                    development. I am constantly improving my skills to provide the latest and most innovative solutions.
                </p>

                <br />

                <p className="text-xl overflow-x-hidden" data-aos="fade-right">
                    I am someone who is always open to acquiring new knowledge and experiences, which is why 
                    I am constantly developing my programming skills. I am very hardworking and committed to my projects,
                    and my passion for learning and acquiring new skills allows me to quickly assimilate knowledge and 
                    grow in various fields. Therefore, I am confident that I will be able to provide you with high-quality 
                    programming solutions.
                </p>
            </div>
        </div>
    )
}

export default About