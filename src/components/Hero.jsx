import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import HeroBg from "../assets/hero-bg.jpg"

function Hero() {
    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [1, 3])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, -10])

    const textFadeUp = {
        initial: { opacity: 0, y: "30px" },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.5 },
        },
    }

    return (
        <>
            <section className="min-h-screen w-full flex flex-col items-center justify-end pb-40 relative overflow-hidden bg-white">
                <motion.div
                    style={{ scale: scale }}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeIn" }}
                    className="absolute top-0 left-0 min-h-screen w-full"
                >
                    <img
                        src={HeroBg}
                        alt=""
                        className="w-full min-h-screen object-cover"
                    />
                </motion.div>
                <div className="hero-overlay"></div>

                <motion.h1
                    style={{ opacity: opacity }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                    }}
                    layoutId="main-heading-1"
                    className=" relative text-white text-center w-[16.5rem] min-[600px]:w-fit"
                >
                    Made to feed your soul
                </motion.h1>

                <motion.p
                    style={{ opacity: opacity }}
                    variants={textFadeUp}
                    initial="initial"
                    animate="animate"
                    className="text-white uppercase max-w-[450px] text-center z-10 hidden min-[425px]:block"
                >
                    Doimo Cucine creates more than places in which to feed the
                    body. It projects and dreams that take form
                </motion.p>
            </section>
        </>
    )
}

export default Hero
