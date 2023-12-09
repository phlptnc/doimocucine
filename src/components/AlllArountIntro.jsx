import React from "react"
import { motion } from "framer-motion"
import DoorType from "../assets/door-type.svg"
import Finishes from "../assets/finishes.svg"
import OpeningSystems from "../assets/opening-systems.svg"
import FadeInScroll from "./Animations/FadeInScroll"

function AlllArountIntro() {
    return (
        <>
            <section className="min-h-[50vh] w-full flex flex-col justify-center">
                <div className="container">
                    <div className="row uppercase mb-10">
                        <FadeInScroll>
                            <p className="text-[0.9rem]">Who we are</p>
                        </FadeInScroll>
                    </div>
                    <div className="row flex justify-between">
                        <div className="left w-[65%] flex flex-col gap-10">
                            <FadeInScroll>
                                <h3>
                                    <span className="mr-14"></span>Any modular
                                    contemporary, design or classic kitchen you
                                    desire is now possible thanks to the
                                    transversality and adaptability of each
                                    single element of All-arounD.
                                </h3>
                            </FadeInScroll>
                        </div>
                        <div className="right w-[25%] uppercase flex flex-col gap-5">
                            <FadeInScroll>
                                <p>
                                    the all-around system begins with the “a” of
                                    aspen, and its sustainable peculiarities ,
                                    and ends with the “d” of dimensions (12, 20
                                    and 23 mm). after selecting the thickness or
                                    typology of the doors, let yourself be
                                    guided by your personal taste for materials
                                    and finishes, and by your specific needs,
                                    until you have created a totally
                                    personalised kitchen: yours.
                                </p>
                            </FadeInScroll>
                        </div>
                    </div>
                </div>
            </section>
            <section className="min-h-screen w-full flex items-center">
                <div className="container">
                    <div className="w-full h-full relative">
                        <div className=" w-fit h-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <FadeInScroll>
                                <h3>All-ArounD</h3>
                            </FadeInScroll>
                        </div>
                        {/* All Around Cirlce */}
                        <motion.div
                            initial={{ rotate: 0, opacity: 0 }}
                            whileInView={{ rotate: "25deg", opacity: 1 }}
                            transition={{ duration: 2, delay: 0.5 }}
                            className="w-[700px] h-[700px] border-[1px] border-black m-auto rounded-full uppercase relative "
                        >
                            <div className="absolute -rotate-[25deg] -left-10 bottom-0 top-0 my-auto h-fit flex flex-col items-center">
                                <img src={DoorType} alt="" />
                                <p>Door Type</p>
                            </div>
                            <div className="absolute -rotate-[25deg]  left-0 right-0 -bottom-11 mx-auto h-fit flex flex-col items-center">
                                <img src={Finishes} alt="" />
                                <p>Finishes</p>
                            </div>
                            <div className="absolute -rotate-[25deg] -right-14 top-1/4 bottom-0 h-fit flex flex-col items-center">
                                <img src={OpeningSystems} alt="" />
                                <p>Opening Systems</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AlllArountIntro
