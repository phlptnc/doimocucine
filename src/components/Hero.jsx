import React from "react"
import { motion } from "framer-motion"

function Hero() {
    return (
        <>
            <section className="h-[100vh] bg-[#686868] w-screen flex items-end justify-center pb-40">
                <motion.h1
                    // initial={{ opacity: 0, scale: 1.5, y: -200 }}
                    // animate={{ opacity: 1, scale: 1, y: 0, zIndex: 0 }}
                    // exit={{ scale: 1 }}
                    // transition={{
                    //     duration: 2,
                    //     ease: "easeInOut",
                    //     // delay: 1,
                    // }}
                    className=" relative z-50 text-yellow-400"
                >
                    Made to feed your soul
                </motion.h1>
                <h1></h1>
            </section>
        </>
    )
}

export default Hero
