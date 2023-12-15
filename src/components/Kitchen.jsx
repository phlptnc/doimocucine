import React, { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { TfiRulerAlt } from "react-icons/tfi"
import { Link } from "react-router-dom"
import FadeInScroll from "./Animations/FadeInScroll"
import ScaleOut from "./Animations/ScaleOut"
import ScaleOutProgress from "./Animations/ScaleOutProgress"
import { textFadeUp } from "./Animations/anim"

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
                className="min-h-screenflex items-center pt-[7%]"
                id={props.id}
            >
                <div
                    className={`max-w-[100rem] h-[50%] mx-auto flex ${props.flex} justify-between items-center`}
                >
                    <div className="kitchen left w-[50%] h-[800px] relative duration-300 ease-in-out">
                        <div className="h-[800px] overflow-hidden">
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
                            className="overflow-hidden absolute left-0 right-0 top-[-6rem] z-20 mx-auto w-fit h-fit"
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
                                        <div className="w-1/3 h-1/3 border-[1px] border-white text-white uppercase flex justify-center items-center rounded-full">
                                            <p className="">Discover</p>
                                        </div>
                                    </div>
                                </Link>
                            </ScaleOut>
                        </div>
                    </div>
                    <div className="right w-[40%]">
                        <FadeInScroll>
                            <b>{props.number}</b>
                            <p className="uppercase mt-[6rem] mb-[2.5rem]">
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default Kitchen
