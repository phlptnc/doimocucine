import React, { useState } from "react"
import Logo from "../assets/doimocucine.svg"
import { RiSearchLine } from "react-icons/ri"
import { RiMapPin2Line } from "react-icons/ri"
import { Link } from "react-router-dom"
import UnderlineBtn from "./Button/UnderlineBtn"
import RoundedBtn from "./Button/RoundedBtn"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <nav className="w-full text-white uppercase flex justify-between items-center py-10 px-20 mix-blend-difference fixed z-[9999]">
                <div className="left flex text-sm font-medium">
                    <Link to="/">All Around System</Link>
                    <Link to="/">Manifesto</Link>
                </div>
                <Link to="/" className="absolute left-0 right-0 mx-auto w-fit">
                    <img src={Logo} alt="logo" />
                </Link>
                <div className="right flex items-center">
                    <Link to="/" className="location-btn relative ">
                        <RiMapPin2Line size={20} />
                    </Link>
                    <Link to="/" className="search-btn relative">
                        <RiSearchLine size={20} />
                    </Link>
                    <a className="menu-btn flex items-center gap-3 normal-case text-2xl font relative cursor-pointer ease-in-out duration-200">
                        Menu
                    </a>
                </div>
            </nav>
            <section className="h-[100vh] flex flex-col items-center justify-center">
                <UnderlineBtn
                    icon={<RiMapPin2Line />}
                    label="Instagram"
                    to="https://www.instagram.com/"
                    transform="uppercase"
                    target="_blank"
                />

                <RoundedBtn
                    label="youtube"
                    to="https://www.youtube.com/"
                    transform="uppercase"
                    target="_blank"
                />
            </section>
        </>
    )
}

export default Navbar
