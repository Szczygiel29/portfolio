import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillFilePersonFill } from 'react-icons/bs'

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/jakub-szczygie%C5%82-42868722b/",
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/Szczygiel29",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:jakub.szczygiel@gmail.com",
        },
        {
            id: 1,
            child: (
                <>
                    Resume <BsFillFilePersonFill size={30} />
                </>
            ),
            href: "/CV_JAKUB_SZCZYGIEL.pdf",
            style: 'rounded-br-md',
            download: true,
        },
    ]

    return (
        <div className="font-sans flex-col top-[35%] left-0 fixed">
        <ul>
            {links.map((link) => (
                <li key={link.id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 " + link.style}>
                    <a 
                    href={link.href}
                    className="flex justify-between items-center w-full text-white"
                    download={link.download}
                    target='_blank'
                    rel="noreferrer"
                    >
                        {link.child}
                    </a>
                </li>
            ))}
        </ul>
    </div>
    )
}

export default SocialLinks