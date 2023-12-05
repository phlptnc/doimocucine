import React from "react"
import Hero from "../components/Hero"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0, zIndex: 999 }}
                exit={{ opacity: 1, zIndex: 999 }}
                transition={{
                    duration: "3",
                    ease: "easeInOut",
                    // times: [0, 0.8, 1],
                }}
                className="w-full h-[100vh] absolute bg-black"
            />
            {/* <Hero /> */}
            <section>
                <div className="relative z-10">
                    <Link to="/manifesto">Manifesto</Link>
                </div>
            </section>
        </>
    )
}

export default Home
