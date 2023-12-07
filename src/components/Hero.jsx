import React from "react"
import { motion } from "framer-motion"

function Hero() {
    return (
        <>
            <section className="min-h-screen w-full bg-[url(./assets/hero-bg.jpg)] bg-no-repeat bg-center flex flex-col items-center justify-end pb-40 relative">
                <div className="hero-overlay"></div>

                <motion.h1
                    // initial={{ opacity: 0, scale: 1.5, y: -200 }}
                    // animate={{ opacity: 1, scale: 1, y: 0, zIndex: 0 }}
                    // exit={{ scale: 1 }}
                    // transition={{
                    //     duration: 2,
                    //     ease: "easeInOut",
                    //     delay: 1,
                    // }}
                    className=" relative text-white"
                >
                    Made to feed your soul
                </motion.h1>
                <p className="text-white uppercase max-w-[450px] text-center  z-10">
                    Doimo Cucine creates more than places in which to feed the
                    body. It projects and dreams that take form
                </p>
            </section>
        </>
    )
}

export default Hero
