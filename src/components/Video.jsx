import React, { useRef, useEffect } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import RoundLink from "../components/Button/RoundLink"
import ShortVideo from "../assets/video.mp4"
import Image1 from "../assets/1.webp"
import Image2 from "../assets/2.webp"
import Image3 from "../assets/3.webp"
import Image4 from "../assets/4.webp"
import Image5 from "../assets/5.webp"
import Scale from "./Animations/Scale"

function Video() {
    const ref = useRef(null)
    // const img = useRef(null)

    const { scrollYProgress } = useScroll({
        // target: ref,
        // offset: ["0 1", "1.33 1"],
        // offset: ["start end", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, 1000])
    const scale = useTransform(scrollYProgress, [0, 1], [1.5, 0.8])
    // const imageY = useTransform(scrollYProgress, [0, 1], [100, 0])

    const inView = useInView(ref, { once: true })
    useEffect(() => {}, [inView])

    return (
        <>
            <section ref={ref} className="min-h-screen relative py-40">
                {/* background image */}
                <motion.div
                    style={{ y: y }}
                    className="home bg-[url(./assets/white-bg-1.webp)] bg-no-repeat bg-center h-[120%] w-full absolute left-0 top-[-50%] -z-10"
                />
                <div className="container">
                    <div className="row uppercase mb-10">
                        <p className="text-[0.9rem]">Who we are</p>
                    </div>
                    <div className="row flex justify-between">
                        <div className="left w-[65%] flex flex-col gap-10">
                            <h3>
                                <span className="mr-14"></span>
                                We are ideas that become actions. Matter
                                transformed into emotion. Invisible yet concrete
                                values that bring new meaning to an interior
                                space.
                            </h3>
                            <RoundLink
                                label="DISCOVER DOIMO CUCINE"
                                style="before:bg-black"
                            />
                        </div>
                        <div className="right w-[25%] uppercase flex flex-col gap-5">
                            <p>
                                <b>Passion, Liberty, Authenticity</b> and
                                Creativity are the key significances of scenario
                                that offers a home for the soul, a taste of
                                something profound and unique sensations.
                            </p>
                            <b>
                                Beyond apperance and cliches, delving into the
                                depth of things and people
                            </b>
                        </div>
                    </div>
                </div>
                {/* video section */}
                <div className="max-h-screen w-[95vw] mx-auto relative">
                    <motion.div
                        initial={{ top: 0, left: 0 }}
                        whileInView={{
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                        transition={{ duration: 3, delay: 1 }}
                        className="absolute"
                    >
                        <img src={Image1} alt="chandelier" />
                    </motion.div>
                    <motion.div
                        initial={{ top: 0, right: 0 }}
                        whileInView={{
                            top: "50%",
                            right: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                        transition={{ duration: 3, delay: 1 }}
                        className="absolute"
                    >
                        <img src={Image2} alt="white table" />
                    </motion.div>
                    <motion.div
                        initial={{ bottom: 0, left: 0 }}
                        whileInView={{
                            bottom: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                        transition={{ duration: 3, delay: 0.9 }}
                        className="absolute"
                    >
                        <img src={Image3} alt="workers" />
                    </motion.div>
                    <motion.div
                        initial={{ bottom: 0, right: 0 }}
                        whileInView={{
                            bottom: "50%",
                            right: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                        transition={{ duration: 3, delay: 0.9 }}
                        className="absolute"
                    >
                        <img src={Image4} alt="table with vase on top" />
                    </motion.div>
                    <motion.div
                        ref={ref}
                        style={{
                            clipPath: "inset(5% 32.5% 15% 32.5%)",
                        }}
                        // style={{
                        //     clipPath: inView
                        //         ? "inset(0 0 0 0)"
                        //         : "inset(5% 32.5% 15% 32.5%)",
                        //     transition: "2.5s",
                        //     transitionDelay: "0.5s",
                        // }}
                        initial={{ clipPath: "inset(5% 32.5% 15% 32.5%)" }}
                        whileInView={{
                            clipPath: "inset(0 0 0 0)",
                        }}
                        transition={{
                            duration: 2.5,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                        className="max-h-[100vh] max-w-[100rem] my-[10rem] mx-auto"
                    >
                        <video
                            src={ShortVideo}
                            loop
                            autoPlay
                            muted
                            className="h-full w-[100rem]"
                        ></video>
                    </motion.div>
                </div>
                <div className="container flex justify-between">
                    <div className="max-w-[50%] ">
                        <h3>
                            100% Made in Italy
                            <br />
                            production
                        </h3>
                        <p className="uppercase ml-20 my-11">
                            Just as they are designed in-house our kitchen are
                            also fabricated entirely in-house. This work is the
                            fruit of a process in which human qualities are
                            fundamental, together with the quality of
                            technologies and materials
                        </p>
                        <RoundLink
                            label="Production"
                            style="uppercase before:bg-black"
                        />
                    </div>
                    <div>
                        <div className="w-full h-full ml-[2.5rem] overflow-hidden">
                            <Scale>
                                <img
                                    src={Image5}
                                    alt="table with cereal on top"
                                    className="w-full h-full"
                                />
                            </Scale>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Video
