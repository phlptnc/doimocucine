import React, { useEffect, useRef } from "react"
import { easeInOut, motion, useAnimation, useInView } from "framer-motion"

function FadeInScroll({ children }) {
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
                        initial: { opacity: 0, y: 50, filter: "blur(5px)" },
                        animate: { opacity: 1, y: 0, filter: "blur(0)" },
                    }}
                    initial="initial"
                    animate={controls}
                    transition={{ duration: 1, ease: easeInOut, delay: 0.3 }}
                >
                    {children}
                </motion.div>
            </div>
        </>
    )
}

export default FadeInScroll
