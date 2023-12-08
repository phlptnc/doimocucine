import React from "react"
import { motion } from "framer-motion"
import { fadeUp } from "./Animations/anim"

const headerData = [
    {
        title: "Transversal Elements",
    },
    {
        title: "in a single system",
    },
    {
        title: "for designing",
    },
    {
        title: "the kitchen",
    },
]

function AllAroundHero() {
    return (
        <>
            <section className="min-h-screen relative flex flex-col items-center justify-between">
                {/* background */}
                <motion.div className="bg-[url(./assets/bg-2.jpg)] bg-no-repeat bg-cover absolute top-0 left-0 h-full w-full" />

                {/* big circle */}
                <div className="w-full h-full flex justify-center absolute top-0 left-0 ease-in-out">
                    <div className="circle animate-spin-slow h-[750px] w-[750px] my-auto border border-b-0 border-t-[1px] border-r-0 border-l-0 rounded-full border-black"></div>
                </div>
                <div className="container pt-[13rem] text-center flex flex-col items-center gap-[3.5rem] relative z-10">
                    <p className="upperclass">All-around</p>
                    <div className="">
                        {headerData.map((item, index) => (
                            <motion.div key={index} className="overflow-hidden">
                                <motion.h2
                                    custom={index}
                                    variants={fadeUp}
                                    initial="initial"
                                    animate="animate"
                                    className="leading-[1.2] overflow-hidden"
                                >
                                    {item.title}
                                </motion.h2>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex gap-10 relative pb-4 z-10">
                    <a href="">Aspen</a>
                    <a href="">D12</a>
                    <a href="">D20</a>
                    <a href="">D23</a>
                </div>
            </section>
        </>
    )
}

export default AllAroundHero
