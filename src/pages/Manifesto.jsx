import React from "react"
import { motion, AnimatePresence } from "framer-motion"

function Manifesto() {
    return (
        <>
            {/* <AnimatePresence> */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 1, 0], zIndex: 0 }}
                exit={{ opacity: 1, zIndex: 999 }}
                transition={{
                    duration: "5",
                    ease: "easeInOut",
                    times: [0, 0.8, 1],
                }}
                className="w-full h-full absolute"
            />
            {/* </AnimatePresence> */}
            <section>
                Manifesto
                <a href="/" className="z-50 relative">
                    Home
                </a>
            </section>
        </>
    )
}

export default Manifesto
