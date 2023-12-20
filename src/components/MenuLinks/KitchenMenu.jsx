import React from "react"
import { motion } from "framer-motion"
import { GoArrowLeft } from "react-icons/go"
import { Link } from "react-router-dom"
import UnderlineBtn from "../Button/UnderlineBtn"

function KitchenMenu({ onClose, onLinkClick }) {
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
                    <p className="uppercase text-sm">Kitchen Space</p>
                    <div>
                        <div className="flex flex-col gap-4">
                            <Link
                                to="/all-around-system"
                                onClick={handleLinkClick}
                                className="round-links text-[1.5rem] "
                            >
                                All-arounD System
                            </Link>
                            <UnderlineBtn
                                label="Aspen"
                                style="uppercase ml-10"
                            />
                            <UnderlineBtn label="D12" style="uppercase ml-10" />
                            <UnderlineBtn label="D20" style="uppercase ml-10" />
                            <UnderlineBtn label="D23" style="uppercase ml-10" />
                            <Link className="round-links text-[1.5rem] ">
                                Materials
                            </Link>
                            <Link className="round-links text-[1.5rem] ">
                                Freedom of Design
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default KitchenMenu
