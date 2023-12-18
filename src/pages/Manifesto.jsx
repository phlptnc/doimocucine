import React, { useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import ManifestoHeader from "../components/ManifestoHeader"
import Soul from "../components/Soul"
import Values from "../components/Values"
import RoundedBtn from "../components/Button/RoundedBtn"
import { LuPenLine } from "react-icons/lu"
import Image1 from "../assets/manifesto/1.webp"
import Image2 from "../assets/manifesto/2.webp"
import Image3 from "../assets/manifesto/3.webp"
import Image4 from "../assets/manifesto/4.webp"
import Image5 from "../assets/manifesto/5.webp"
import ScaleOutProgress from "../components/Animations/ScaleOutProgress"
import FadeInScroll from "../components/Animations/FadeInScroll"
import ScaleOut from "../components/Animations/ScaleOut"

function Manifesto() {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({})
    const y = useTransform(scrollYProgress, [0, 1], [0, 1000])

    return (
        <>
            {/* <AnimatePresence> */}
            {/* <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 1, 0], zIndex: 0 }}
                exit={{ opacity: 1, zIndex: 999 }}
                transition={{
                    duration: "5",
                    ease: "easeInOut",
                    times: [0, 0.8, 1],
                }}
                className="w-full h-full absolute"
            /> */}
            {/* </AnimatePresence> */}
            <div
                ref={ref}
                className="manifesto relative overflow-hidden flex flex-col gap-20 sm:gap-[13rem] py-[10rem] sm:py-[13rem]"
            >
                {/* background */}
                <motion.div
                    style={{ y: y }}
                    className="bg-[url(./assets/white-bg-1.webp)] h-[120%] w-full bg-contain absolute left-0 top-0 -z-10"
                />
                <ManifestoHeader />

                <div className="container m-auto overflow-hidden">
                    <ScaleOut>
                        <ScaleOutProgress>
                            <img
                                src={Image1}
                                alt="boutiques"
                                className=" w-full h-full"
                            />
                        </ScaleOutProgress>
                    </ScaleOut>
                </div>
                <Soul />
                <div>
                    <div className="max-w-[100rem] m-auto flex min-[990px]:flex-row flex-col items-center justify-between gap-20">
                        <ScaleOut>
                            <div className="min-[990px]:pr-[20rem] m-auto w-[80%] min-[990px]:w-full overflow-hidden">
                                <ScaleOutProgress>
                                    <img
                                        src={Image2}
                                        alt=""
                                        className="w-full h-full object-contain object-center"
                                    />
                                </ScaleOutProgress>
                            </div>
                        </ScaleOut>
                        <ScaleOut>
                            <div className="m-auto w-[80%] min-[990px]:w-full overflow-hidden">
                                <ScaleOutProgress>
                                    <img
                                        src={Image3}
                                        alt=""
                                        className="w-full h-full object-contain object-center"
                                    />
                                </ScaleOutProgress>
                            </div>
                        </ScaleOut>
                    </div>
                </div>
                <Values />

                <div className="max-w-[100rem] m-auto flex min-[990px]:flex-row flex-col items-center justify-between gap-20">
                    <ScaleOut>
                        <div className="m-auto w-[80%] min-[990px]:w-full overflow-hidden">
                            <ScaleOutProgress>
                                <img
                                    src={Image4}
                                    alt=""
                                    className="w-full h-full object-contain object-center"
                                />
                            </ScaleOutProgress>
                        </div>
                    </ScaleOut>
                    <ScaleOut>
                        <div className="min-[990px]:pl-[20rem] m-auto w-[80%] min-[990px]:w-full overflow-hidden">
                            <ScaleOutProgress>
                                <img
                                    src={Image5}
                                    alt=""
                                    className="w-full h-full object-contain object-center"
                                />
                            </ScaleOutProgress>
                        </div>
                    </ScaleOut>
                </div>
                <FadeInScroll>
                    <section>
                        <div className="container items-center flex flex-col gap-20">
                            <p className="uppercase">Doimo Cucine</p>
                            <h2 className="text-center w-[35rem]">
                                Made to feed your soul
                            </h2>
                            <RoundedBtn
                                icon={<LuPenLine />}
                                label="get in touch"
                                transform="uppercase"
                                style="flex gap-5 w-fit justify-center items-center border-black hover:bg-black hover:text-white duration-500"
                            />
                        </div>
                    </section>
                </FadeInScroll>
            </div>
        </>
    )
}

export default Manifesto
