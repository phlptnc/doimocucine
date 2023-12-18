import React from "react"
import { delay, easeInOut, motion } from "framer-motion"
import { titleAnimation } from "./Animations/anim"

const title = [
    {
        letter: "M",
    },
    {
        letter: "a",
    },
    {
        letter: "d",
    },
    {
        letter: "e",
    },
    {
        letter: "t",
    },
    {
        letter: "o",
    },
    {
        letter: " ",
    },
    {
        letter: "f",
    },
    {
        letter: "e",
    },
    {
        letter: "e",
    },
    {
        letter: "d",
    },
    {
        letter: " ",
    },
    {
        letter: "y",
    },
    {
        letter: "o",
    },
    {
        letter: "u",
    },
    {
        letter: "r",
    },
    {
        letter: "s",
    },
    {
        letter: "o",
    },
    {
        letter: "u",
    },
    {
        letter: "l",
    },
]

function Loader({ setLoading }) {
    const headingAnimation = {
        initial: { scale: 1.1 },
        animate: {
            scale: 1.1,
            transition: {
                ease: "easeInOut",
                duration: 2,
            },
        },
    }

    return (
        <>
            <div className="loader h-screen flex items-center justify-center bg-black">
                <motion.h1
                    variants={headingAnimation}
                    initial="initial"
                    animate="animate"
                    layoutId="main-heading-1"
                    className="flex text-white justify-center w-[18rem] min-[600px]:w-fit flex-wrap"
                >
                    {title.map((item, index) => (
                        <motion.div
                            variants={titleAnimation}
                            initial="initial"
                            animate="animate"
                            onAnimationComplete={() => setLoading(false)}
                            custom={index}
                            key={index}
                        >
                            {item.letter}
                        </motion.div>
                    ))}
                </motion.h1>
            </div>
        </>
    )
}

export default Loader
