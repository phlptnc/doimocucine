import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import RoundLink from "./Button/RoundLink"
import FadeInScroll from "./Animations/FadeInScroll"
import { IoChevronDownOutline } from "react-icons/io5"

function HomeIntro() {
    const { scrollYProgress } = useScroll()
    const opacity = useTransform(scrollYProgress, [0, 1], [1, -10])

    return (
        <>
            <section
                className="min-h-screen text-white bg-black flex justify-center relative"
                id="intro"
            >
                <motion.a
                    style={{ opacity: opacity }}
                    href="#intro"
                    className=" w-[12rem] h-[12rem] rounded-full absolute left-0 top-[-10%] right-0 mx-auto z-30 border border-white border-b-0"
                >
                    <div className="flex flex-col items-center pt-3 animate-scroll ">
                        <IoChevronDownOutline />
                        <p className=" w-fit">Scroll</p>
                    </div>
                </motion.a>
                <div className="m-auto uppercase text-center">
                    <FadeInScroll>
                        <p>A 360° degree solution</p>
                    </FadeInScroll>
                    <div className="py-[5rem] normal-case">
                        <FadeInScroll>
                            <h2>
                                All-arounD: one complete
                                <br />
                                and versatile system
                                <br />
                                for designing the kitchen
                                <br />
                                of your dreams.
                            </h2>
                        </FadeInScroll>
                    </div>
                    <FadeInScroll>
                        <RoundLink
                            to=""
                            label="Explore our all around system"
                            style="justify-center before:bg-white"
                        />
                    </FadeInScroll>
                </div>
            </section>
        </>
    )
}

export default HomeIntro
