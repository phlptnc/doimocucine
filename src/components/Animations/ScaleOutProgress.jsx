import React from "react"
import { motion, transform, useScroll, useTransform } from "framer-motion"

function ScaleOutProgress({ children }) {
    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.6])

    return (
        <>
            <motion.div
                style={{ scale: scale }}
                className="w-full h-full relative z-10"
            >
                {children}
            </motion.div>
        </>
    )
}

export default ScaleOutProgress
