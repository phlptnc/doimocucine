import React, { useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Manifesto from "./pages/Manifesto"
import AllAroundSystem from "./pages/AllAroundSystem"
import Loader from "./components/Loader"

function App() {
    const location = useLocation()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loading
            ? document.querySelector("body").classList.add("loading")
            : document.querySelector("body").classList.remove("loading")
    }, [loading])

    return (
        <>
            <AnimatePresence mode="wait">
                {loading ? (
                    <motion.div key="loader">
                        <Loader setLoading={setLoading} />
                    </motion.div>
                ) : (
                    <>
                        <Navbar />
                        <Routes location={location}>
                            <Route path="/" element={<Home />} />
                            <Route path="manifesto" element={<Manifesto />} />
                            <Route
                                path="all-around-system"
                                element={<AllAroundSystem />}
                            />
                        </Routes>
                        <Footer />
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default App
