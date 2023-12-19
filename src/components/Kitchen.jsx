import React, { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { TfiRulerAlt } from "react-icons/tfi"
import { Link } from "react-router-dom"
import FadeInScroll from "./Animations/FadeInScroll"
import ScaleOut from "./Animations/ScaleOut"
import ScaleOutProgress from "./Animations/ScaleOutProgress"
import { textFadeUp } from "./Animations/anim"
import RoundLink from "./Button/RoundLink"

function Kitchen(props) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start("animate")
        }
    }, [inView])

    return (
        <>
            <section
                className="min-h-screenflex items-center pt-[5rem] min-[1000px]:pt-[7%]"
                id={props.id}
            >
                <div
                    className={`max-w-[100rem] h-[50%] px-4 sm:px-8 mx-auto flex ${props.flex} justify-between items-center gap-10`}
                >
                    <div className="kitchen left w-full min-[1000px]:w-[50%] h-[600px] sm:h-[800px]  relative duration-300 ease-in-out">
                        <div className=" h-[600px] sm:h-[800px] overflow-hidden">
                            <ScaleOutProgress>
                                <ScaleOut>
                                    <img
                                        src={props.background}
                                        alt="kitchen"
                                        className=" w-full h-full"
                                    />
                                </ScaleOut>
                            </ScaleOutProgress>
                        </div>
                        <div
                            ref={ref}
                            className="overflow-hidden absolute left-0 right-0 top-[-3rem] min-[1000px]:top-[-6rem] z-20 mx-auto w-fit h-fit"
                        >
                            <motion.h1
                                variants={textFadeUp}
                                initial="initial"
                                animate={controls}
                            >
                                {props.title}
                            </motion.h1>
                        </div>

                        <div className="absolute left-0 top-0 z-10 w-full h-full">
                            <ScaleOut>
                                <Link
                                    href={props.href}
                                    className="discover-link opacity-0 duration-500 ease-in-out hover:opacity-100"
                                >
                                    <div className="w-full h-full bg-[#00000080] flex justify-center items-center">
                                        <div className="w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] border-[1px] border-white text-white uppercase flex justify-center items-center rounded-full">
                                            <p>Discover</p>
                                        </div>
                                    </div>
                                </Link>
                            </ScaleOut>
                        </div>
                    </div>
                    <div className="right w-full min-[1000px]:w-[40%]">
                        <FadeInScroll>
                            <b>{props.number}</b>
                            <p className="uppercase min-[1000px]:mt-[6rem] min-[1000px]:mb-[2.5rem] my-8">
                                {props.description}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className=" w-[100px] h-[100px]">
                                    <img src={props.svg} alt="" />
                                </div>
                                <TfiRulerAlt size={30} color="#a6a6a6" />
                                <div>
                                    <p>Thickness</p>
                                    <p className="text-[#a6a6a6]">
                                        {props.thickness}
                                    </p>
                                </div>
                            </div>
                        </FadeInScroll>
                        <div className="mr-auto mt-8 pb-12 border-b-[1px] block min-[1000px]:hidden border-black">
                            <FadeInScroll>
                                <RoundLink
                                    to={props.href}
                                    label={`discover ${props.title}`}
                                    style="uppercase before:bg-black font-semibold"
                                />
                            </FadeInScroll>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Kitchen
