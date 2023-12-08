import React, { useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Manifesto from "./pages/Manifesto"
import AllAroundSystem from "./pages/AllAroundSystem"

function App() {
    const location = useLocation()
    return (
        <>
            <Navbar />
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="manifesto" element={<Manifesto />} />
                    <Route
                        path="all-around-system"
                        element={<AllAroundSystem />}
                    />
                </Routes>
            </AnimatePresence>
            <Footer />
        </>
    )
}

export default App
