import React, { useState } from "react"
import Logo from "../assets/doimocucine.svg"
import { RiSearchLine, RiMapPin2Line } from "react-icons/ri"
import { Link } from "react-router-dom"
import MenuLinks from "./MenuLinks"
import {
    motion,
    AnimatePresence,
    useMotionValueEvent,
    useScroll,
} from "framer-motion"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    //no scroll when menu is open
    menuOpen
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto")

    // Hide navbar upon scroll
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious()
        if (latest > previous && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    const goTop = () => {
        window.scrollTo({
            top: 0,
        })
    }

    return (
        <>
            <motion.nav
                variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, delay: 0.25, ease: "easeInOut" }}
                className="w-full text-white uppercase flex justify-between items-center py-6 px-20 mix-blend-difference fixed z-40"
            >
                <div className="left flex text-sm font-medium">
                    <Link
                        onClick={goTop}
                        to="/all-around-system"
                        className="link relative"
                    >
                        All Around System
                    </Link>
                    <Link
                        onClick={goTop}
                        to="/manifesto"
                        className="link relative"
                    >
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
            </motion.nav>

            {/* Menu Button */}
            <motion.a
                onClick={toggleMenu}
                variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="menu-btn h-[108px] flex items-center mix-blend-difference text-white mr-16 gap-3 text-2xl fixed right-0 ease-in-out duration-200 pr-4 pl-4 z-50 cursor-pointer"
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
            </motion.a>
            <AnimatePresence mode="wait">
                {menuOpen && <MenuLinks />}
            </AnimatePresence>
        </>
    )
}

export default Navbar
