import React from "react"
import UnderlineBtn from "./Button/UnderlineBtn"
import { Link } from "react-router-dom"
import RoundedBtn from "./Button/RoundedBtn"
import { RiMapPin2Line } from "react-icons/ri"
import { BsPerson } from "react-icons/bs"
import { SlBookOpen } from "react-icons/sl"
import { AnimatePresence, motion } from "framer-motion"

const menuData = [
    {
        label: "Doimo Cucine Wolrd",
        href: "",
    },
    {
        label: "Kitchen space",
        href: "",
    },
    {
        label: "Ideas and inspirations ",
        href: "",
    },
    {
        label: "Contacts",
        href: "",
    },
]

const animate = {
    initial: { opacity: 0, y: "30px" },
    animate: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: 0.4 * (i + 1.5) },
    }),
    exit: (i) => ({
        opacity: 0,
        y: "30px",
        transition: { duration: 0.8, delay: -0.4 * (i - 1.5) },
    }),
}

function MenuLinks() {
    return (
        <>
            <motion.div
                initial={{ x: "100%" }}
                animate={{
                    x: 0,
                    transition: { duration: 0.8, ease: [0.5, 0, 0.75, 0] },
                }}
                exit={{
                    x: "100%",
                    transition: {
                        duration: 0.8,
                        ease: [0.5, 0, 0.75, 0],
                        delay: 1,
                    },
                }}
                className="w-[50%] min-h-screen bg-white flex flex-col justify-between py-[3rem] px-[5rem] fixed right-0 top-0 z-[49]"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { duration: 0.8, delay: 2.2 },
                    }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, delay: 0.8 },
                    }}
                >
                    <UnderlineBtn
                        icon={<SlBookOpen size={20} />}
                        label="Request our catalogue"
                        transform="uppercase"
                        style="flex gap-5 items-center"
                    />
                </motion.div>

                <div className="flex flex-col justify-center gap-5">
                    {menuData.map((item, index) => (
                        <motion.div
                            custom={index}
                            key={index}
                            variants={animate}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <Link
                                to={item.href}
                                className="flex flex-row items-center gap-2 w-fit text-[3rem] before:ease-in-out before:duration-500 before:w-5 before:h-5 before:rounded-full before:bg-black before:scale-0 hover:before:scale-100"
                            >
                                {item.label}
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                        transition: { duration: 0.8, delay: 2.2 },
                    }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, delay: 0.8 },
                    }}
                    className="flex justify-between items-center"
                >
                    <UnderlineBtn
                        icon={<BsPerson size={20} />}
                        label="Reserved Area"
                        style="flex gap-5 items-center"
                    />
                    <RoundedBtn
                        icon={<RiMapPin2Line size={20} />}
                        label="Find a retailer"
                        style="flex gap-5 items-center hover:bg-black hover:text-white duration-500"
                    />
                </motion.div>
            </motion.div>
        </>
    )
}

export default MenuLinks
