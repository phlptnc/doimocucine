import React from "react"
import UnderlineBtn from "./Button/UnderlineBtn"
import { Link } from "react-router-dom"
import RoundedBtn from "./Button/RoundedBtn"
import { RiMapPin2Line } from "react-icons/ri"
import { BsPerson } from "react-icons/bs"
import { SlBookOpen } from "react-icons/sl"
import { motion } from "framer-motion"

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
    initial: { opacity: 0, y: "30px", filter: "blur(5px)" },
    animate: (i) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0)",
        transition: { duration: 0.8, delay: 0.4 * (i + 1.5) },
    }),
    exit: (i) => ({
        opacity: 0,
        y: "30px",
        filter: "blur(5px)",
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
                className=" w-full min-[1050px]:w-[50%] min-h-screen bg-white flex flex-col justify-between py-[10rem] min-[480px]:py-12 px-6 xl:px-[5rem] fixed right-0 top-0 z-[49]"
            >
                <motion.div
                    initial={{ opacity: 0, filter: "blur(5px)" }}
                    animate={{
                        opacity: 1,
                        filter: "blur(0)",
                        transition: { duration: 0.8, delay: 2.2 },
                    }}
                    exit={{
                        opacity: 0,
                        filter: "blur(5px)",
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
                                className="mobile-links flex flex-row items-center gap-2 w-fit before:ease-in-out before:duration-500 before:w-5 before:h-5 before:rounded-full before:bg-black before:scale-0 hover:before:scale-100"
                            >
                                {item.label}
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{
                        opacity: 0,
                        filter: "blur(5px)",
                    }}
                    animate={{
                        opacity: 1,
                        filter: "blur(0)",
                        transition: { duration: 0.8, delay: 2.2 },
                    }}
                    exit={{
                        opacity: 0,
                        filter: "blur(5px)",
                        transition: { duration: 0.8, delay: 0.8 },
                    }}
                    className="flex min-[480px]:flex-row flex-col-reverse justify-between min-[480px]:items-center"
                >
                    <UnderlineBtn
                        icon={<BsPerson size={25} />}
                        label="Reserved Area"
                        transform="uppercase"
                        style="gap-5 items-center min-[480px]:flex hidden"
                    />
                    <RoundedBtn
                        icon={<RiMapPin2Line size={20} />}
                        label="Find a retailer"
                        transform="uppercase"
                        style="flex gap-5 items-center border-black hover:bg-black hover:text-white duration-500 w-fit"
                    />
                </motion.div>
            </motion.div>
        </>
    )
}

export default MenuLinks
