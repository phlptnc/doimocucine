import React, { useState } from "react"
import UnderlineBtn from "./Button/UnderlineBtn"
import { Link } from "react-router-dom"
import RoundedBtn from "./Button/RoundedBtn"
import { RiMapPin2Line } from "react-icons/ri"
import { BsPerson } from "react-icons/bs"
import { SlBookOpen } from "react-icons/sl"
import { AnimatePresence, motion } from "framer-motion"
import Doimocucine from "./MenuLinks/Doimocucine"
import KitchenMenu from "./MenuLinks/KitchenMenu"
import IdeasMenu from "./MenuLinks/IdeasMenu"

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
    const [openDoimo, setOpenDoimo] = useState(false)
    const toggleDoimo = () => {
        setOpenDoimo(!openDoimo)
    }

    const [openKitchen, setOpenKitchen] = useState(false)
    const toggleKitchen = () => {
        setOpenKitchen(!openKitchen)
    }

    const [openItem, setOpenItem] = useState(false)
    const toggleItem = () => {
        setOpenItem(!openItem)
    }

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
                className="w-full min-[850px]:w-[80%] min-[1050px]:w-[50%] min-h-screen bg-white flex flex-col justify-between py-[10rem] min-[480px]:py-12 px-6 xl:px-[5rem] fixed right-0 top-0 overflow-hidden z-[49]"
            >
                <motion.div
                    initial={{ opacity: 0, filter: "blur(5px)" }}
                    animate={{
                        opacity: 1,
                        filter: "blur(0)",
                        transition: { duration: 0.8, delay: 1.8 },
                    }}
                    exit={{
                        opacity: 0,
                        filter: "blur(5px)",
                        transition: { duration: 0.8, delay: 0.5 },
                    }}
                >
                    <UnderlineBtn
                        icon={<SlBookOpen size={20} />}
                        label="Request our catalogue"
                        transform="uppercase"
                        style="flex gap-5 items-center"
                    />
                </motion.div>

                <div className="main flex flex-col justify-center gap-5 min-[850px]:relative">
                    <motion.a
                        onClick={toggleDoimo}
                        initial={{ opacity: 0, y: "30px", filter: "blur(5px)" }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            filter: "blur(0)",
                            transition: { duration: 0.8, delay: 0.5 },
                        }}
                        // transition={{ duration: 0.8, delay: 0.5 }}
                        exit={{
                            opacity: 0,
                            y: "30px",
                            filter: "blur(5px)",
                            transition: { duration: 0.8, delay: 1.1 },
                        }}
                        className="mobile-links round-links"
                    >
                        Doimo Cucine World
                    </motion.a>
                    <motion.a
                        onClick={toggleKitchen}
                        initial={{ opacity: 0, y: "30px", filter: "blur(5px)" }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            filter: "blur(0)",
                            transition: { duration: 0.8, delay: 0.7 },
                        }}
                        // transition={{ duration: 0.8, delay: 0.7 }}
                        exit={{
                            opacity: 0,
                            y: "30px",
                            filter: "blur(5px)",
                            transition: { duration: 0.8, delay: 0.9 },
                        }}
                        className="mobile-links round-links"
                    >
                        Kitchen Space
                    </motion.a>
                    <motion.a
                        onClick={toggleItem}
                        initial={{ opacity: 0, y: "30px", filter: "blur(5px)" }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            filter: "blur(0)",
                            transition: { duration: 0.8, delay: 0.9 },
                        }}
                        // transition={{ duration: 0.8, delay: 0.9 }}
                        exit={{
                            opacity: 0,
                            y: "30px",
                            filter: "blur(5px)",
                            transition: { duration: 0.8, delay: 0.7 },
                        }}
                        className="mobile-links round-links"
                    >
                        Ideas and inspirations
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0, y: "30px", filter: "blur(5px)" }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            filter: "blur(0)",
                            transition: { duration: 0.8, delay: 1.1 },
                        }}
                        // transition={{ duration: 0.8, delay: 1.1 }}
                        exit={{
                            opacity: 0,
                            y: "30px",
                            filter: "blur(5px)",
                            transition: { duration: 0.8, delay: 0.5 },
                        }}
                        className="mobile-links round-links"
                    >
                        Contacts
                    </motion.a>
                    <AnimatePresence>
                        {openDoimo && <Doimocucine onClose={toggleDoimo} />}
                        {openKitchen && <KitchenMenu onClose={toggleKitchen} />}
                        {openItem && <IdeasMenu onClose={toggleItem} />}
                    </AnimatePresence>
                </div>

                <motion.div
                    initial={{
                        opacity: 0,
                        filter: "blur(5px)",
                    }}
                    animate={{
                        opacity: 1,
                        filter: "blur(0)",
                        transition: { duration: 0.8, delay: 1.8 },
                    }}
                    exit={{
                        opacity: 0,
                        filter: "blur(5px)",
                        transition: { duration: 0.8, delay: 0.5 },
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
