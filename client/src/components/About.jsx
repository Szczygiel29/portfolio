import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])

    return (
        <div name="about" className="font-sans w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>
                            <p className="text-xl mt-20" data-aos="fade-left">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged. It was popularised in
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including
                                versions of Lorem Ipsum.
                            </p>
                       
                    <br />
                    <p className="text-xl mt-20" data-aos="fade-right">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Modi fugiat velit voluptatibus natus, odio accusantium aliquid ipsam,
                        eos totam neque doloribus nemo atque similique explicabo minima molestiae
                        ad quaerat id nesciunt. Et ipsum quae nulla eum est alias unde debitis inventore,
                        autem laudantium perspiciatis odio? Sapiente corrupti laborum maiores autem.
                    </p>
            </div>
        </div>
    )
}

export default About