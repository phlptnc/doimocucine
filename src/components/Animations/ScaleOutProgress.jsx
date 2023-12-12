import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

function ScaleOutProgress({ children, style }) {
    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.6])

    return (
        <>
            <motion.div
                style={{ scale: scale }}
                className="h-full w-full relative z-10 overflow-hidden"
            >
                {children}
            </motion.div>
        </>
    )
}

export default ScaleOutProgress
