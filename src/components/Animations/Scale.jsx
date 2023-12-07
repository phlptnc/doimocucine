import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

function Scale({ children }) {
    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [1.5, 0.8])

    return (
        <>
            <motion.div style={{ scale: scale }} className="w-full h-full ">
                {children}
            </motion.div>
        </>
    )
}

export default Scale
