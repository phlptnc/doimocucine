import React, { useState } from "react"
import Logo from "../assets/doimocucine.svg"
import { RiSearchLine, RiMapPin2Line } from "react-icons/ri"
import { Link } from "react-router-dom"
import MenuLinks from "./MenuLinks"
import { AnimatePresence } from "framer-motion"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const goTop = () => {
        window.scrollTo({
            top: 0,
        })
    }

    return (
        <>
            <nav className="w-full text-white uppercase flex justify-between items-center py-6 px-20 mix-blend-difference fixed z-40">
                <div className="left flex text-sm font-medium">
                    <Link to="/all-around-system">All Around System</Link>
                    <Link onClick={goTop} to="/manifesto">
                        Manifesto
                    </Link>
                </div>
                <Link
                    onClick={goTop}
                    to="/"
                    className="absolute left-0 right-0 mx-auto w-fit"
                >
                    <img src={Logo} alt="logo" />
                </Link>
                <div className="right flex items-center mr-32">
                    <Link to="/" className="location-btn relative ">
                        <RiMapPin2Line size={20} />
                    </Link>
                    <Link to="/" className="search-btn relative">
                        <RiSearchLine size={20} />
                    </Link>
                </div>
            </nav>

            {/* Menu Button */}
            <a
                onClick={toggleMenu}
                className="menu-btn flex items-center mix-blend-difference text-white mt-4 mr-16 gap-3 text-2xl fixed right-0 ease-in-out duration-200 p-5 z-50 cursor-pointer"
            >
                <span className="overflow-hidden h-7">
                    <p
                        className={`duration-1000 ease-in-out ${
                            menuOpen ? "translate-y-[-50%]" : ""
                        }`}
                    >
                        Menu
                        <br />
                        Close
                    </p>
                </span>
            </a>
            <AnimatePresence mode="wait">
                {menuOpen && <MenuLinks />}
            </AnimatePresence>
        </>
    )
}

export default Navbar
