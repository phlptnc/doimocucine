import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import HeroBg from "../assets/hero-bg.jpg"

function Hero() {
    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [1, 3])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, -10])

    return (
        <>
            <section className="min-h-screen w-full flex flex-col items-center justify-end pb-40 relative overflow-hidden">
                <motion.div
                    style={{ scale: scale }}
                    className="absolute top-0 left-0 min-h-screen w-full"
                >
                    <img src={HeroBg} alt="" className="w-full h-full" />
                </motion.div>
                <div className="hero-overlay"></div>

                <motion.h1
                    style={{ opacity: opacity }}
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
                <motion.p
                    style={{ opacity: opacity }}
                    className="text-white uppercase max-w-[450px] text-center  z-10"
                >
                    Doimo Cucine creates more than places in which to feed the
                    body. It projects and dreams that take form
                </motion.p>
            </section>
        </>
    )
}

export default Hero
