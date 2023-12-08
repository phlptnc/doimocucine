import React, { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

function ScaleOut({ children }) {
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
            <div ref={ref}>
                <motion.div
                    variants={{
                        initial: { scale: 0, y: 50 },
                        animate: { scale: 1, y: 0 },
                    }}
                    initial="initial"
                    animate={controls}
                    transition={{ duration: 1.5 }}
                >
                    {children}
                </motion.div>
            </div>
        </>
    )
}

export default ScaleOut
