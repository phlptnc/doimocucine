import React from "react"
import { motion } from "framer-motion"
import { fadeUp } from "./Animations/anim"

const manifesto = [
    {
        title: "We are ideas that become",
    },
    {
        title: "actions. Matter transformed into",
    },
    {
        title: "emotion. Invisible yet concrete",
    },
    {
        title: "values that bring new meaning to",
    },
    {
        title: "an interior space. Beyond the",
    },
    {
        title: "commonplace, into the depth of",
    },
    {
        title: "people and things.",
    },
]

function ManifestoHeader() {
    return (
        <>
            <section>
                <div className="container text-center">
                    <p className="uppercase pb-14">Manifesto</p>
                    <div>
                        {manifesto.map((item, index) => (
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
            </section>
        </>
    )
}

export default ManifestoHeader
