import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { GoArrowLeft } from "react-icons/go"

function Doimocucine({ onClose, onLinkClick }) {
    const handleLinkClick = () => {
        onClose()
        onLinkClick()

        goTop = () => {
            window.scrollTo({
                top: 0,
            })
        }
    }

    return (
        <>
            <motion.div
                initial={{ x: "100%" }}
                animate={{
                    x: 0,
                    transition: { duration: 1, ease: [0.5, 0, 0.75, 0] },
                }}
                exit={{
                    x: "100%",
                    transition: {
                        duration: 1,
                        ease: [0.5, 0, 0.75, 0],
                    },
                }}
                className="bg-[#dadada] w-[120%] h-[900px] pl-4 min-[500px]:pl-[5rem] pt-[3rem] absolute min-[850px]:top-[-10rem] top-0 left-0 z-50"
            >
                <div
                    onClick={onClose}
                    className="flex gap-2 items-center w-fit mb-[6rem] cursor-pointer"
                >
                    <GoArrowLeft size={20} />
                    <button>Back</button>
                </div>
                <div className="flex flex-col gap-[3.5rem]">
                    <p className="uppercase text-sm">Doimo Cucine World</p>
                    <div className="flex flex-col text-[1.5rem] gap-4">
                        <Link className="round-links">Our Soul</Link>
                        <Link
                            onClick={handleLinkClick}
                            to="/manifesto"
                            className="round-links"
                        >
                            Manifesto
                        </Link>
                        <Link className="round-links">Sustainability</Link>
                        <Link className="round-links">Production process</Link>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Doimocucine
