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
import FadeInScroll from "./Animations/FadeInScroll"

function Video() {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({})
    const y = useTransform(scrollYProgress, [0, 1], [0, 1000])

    const inView = useInView(ref, { once: true })
    useEffect(() => {}, [inView])

    return (
        <>
            <section ref={ref} className="min-h-screen relative py-20 md:py-40">
                {/* background image */}
                <motion.div
                    style={{ y: y }}
                    className="bg-[url(./assets/white-bg-1.webp)] bg-no-repeat bg-center bg-cover h-[120%] w-full absolute left-0 top-[-50%] -z-10"
                />
                <div className="container">
                    <div className="row uppercase mb-10">
                        <FadeInScroll>
                            <p className="text-[0.9rem]">Who we are</p>
                        </FadeInScroll>
                    </div>
                    <div className="row flex min-[950px]:flex-row flex-col gap-10 justify-between">
                        <div className="left min-[950px]:w-[65%] flex flex-col gap-10">
                            <FadeInScroll>
                                <h3>
                                    <span className="min-[950px]:mr-14"></span>
                                    We are ideas that become actions. Matter
                                    transformed into emotion. Invisible yet
                                    concrete values that bring new meaning to an
                                    interior space.
                                </h3>
                            </FadeInScroll>
                            <FadeInScroll>
                                <RoundLink
                                    label="DISCOVER DOIMO CUCINE"
                                    style="before:bg-black"
                                />
                            </FadeInScroll>
                        </div>
                        <div className="right min-[950px]:w-[25%] uppercase flex flex-col gap-5">
                            <FadeInScroll>
                                <p>
                                    <b>Passion, Liberty, Authenticity</b> and
                                    Creativity are the key significances of
                                    scenario that offers a home for the soul, a
                                    taste of something profound and unique
                                    sensations.
                                </p>
                                <b>
                                    Beyond apperance and cliches, delving into
                                    the depth of things and people
                                </b>
                            </FadeInScroll>
                        </div>
                    </div>
                </div>
                {/* video section */}
                <div className="max-h-screen w-[95vw] mx-auto relative">
                    <motion.div
                        initial={{ top: 0, left: 0, opacity: 1 }}
                        whileInView={{
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            opacity: 0,
                        }}
                        transition={{ duration: 3, delay: 1 }}
                        className="absolute xl:w-full w-[20%] "
                    >
                        <img src={Image1} alt="chandelier" />
                    </motion.div>
                    <motion.div
                        initial={{ top: 0, right: 0, opacity: 1 }}
                        whileInView={{
                            top: "50%",
                            right: "50%",
                            transform: "translate(-50%, -50%)",
                            opacity: 0,
                        }}
                        transition={{ duration: 3, delay: 1 }}
                        className="absolute xl:w-full w-[20%]"
                    >
                        <img src={Image2} alt="white table" />
                    </motion.div>
                    <motion.div
                        initial={{ bottom: 0, left: 0, opacity: 1 }}
                        whileInView={{
                            bottom: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            opacity: 0,
                        }}
                        transition={{ duration: 3, delay: 0.9 }}
                        className="absolute xl:w-full w-[15%]"
                    >
                        <img src={Image3} alt="workers" />
                    </motion.div>
                    <motion.div
                        initial={{ bottom: 0, right: 0, opacity: 1 }}
                        whileInView={{
                            bottom: "50%",
                            right: "50%",
                            transform: "translate(-50%, -50%)",
                            opacity: 0,
                        }}
                        transition={{ duration: 3, delay: 0.9 }}
                        className="absolute xl:w-full w-[20%]"
                    >
                        <img src={Image4} alt="table with vase on top" />
                    </motion.div>
                    <motion.div
                        ref={ref}
                        style={{
                            clipPath: "inset(5% 32.5% 15% 32.5%)",
                        }}
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
                <div className="container flex min-[950px]:flex-row flex-col gap-8 justify-between">
                    <div className=" w-full min-[950px]:max-w-[50%]">
                        <FadeInScroll>
                            <h3>
                                100% Made in Italy
                                <br />
                                production
                            </h3>
                            <p className="uppercase min-[950px]:ml-20 my-11">
                                Just as they are designed in-house our kitchen
                                are also fabricated entirely in-house. This work
                                is the fruit of a process in which human
                                qualities are fundamental, together with the
                                quality of technologies and materials
                            </p>
                            <RoundLink
                                label="Production"
                                style="uppercase before:bg-black"
                            />
                        </FadeInScroll>
                    </div>
                    <div>
                        <div className=" w-2/3 min-[950px]:w-full h-full ml-auto overflow-hidden">
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
