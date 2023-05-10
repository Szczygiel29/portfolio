import React, { useEffect } from 'react'
import ja from '../assets/ja.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll'

const Home = () => {
    const [text] = useTypewriter({
        words: ['Jakub', 'Full Stack Developer'],
        loop: true,
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    useEffect(() => {
        AOS.init({duration: 2000})
    },[]);

    return (
        <div id="home" className="font-sans h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        Hi, I'm <span className="text-yellow-400">{text}</span> <Cursor />
                    </h2>
                    <p className="text-gray-500 py-4 w-2/3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                    </p>
                    <div>
                        <Link 
                        activeClass="active" 
                        to="portfolio" 
                        spy={true} 
                        smooth={true} 
                        duration={500}
                        className="group text-white cursor-pointer w-fit px-6 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={ja} alt="My profile" className="rounded-3xl mx-auto w-2/3 md:w-full" data-aos="fade-left"/>
                </div>
            </div>
        </div>
    )
}

export default Home