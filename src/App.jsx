import React, { useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Home from "./pages/Home"
import Manifesto from "./pages/Manifesto"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
    const location = useLocation()
    return (
        <>
            <Navbar />
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="manifesto" element={<Manifesto />} />
                </Routes>
            </AnimatePresence>
            <Footer />
        </>
    )
}

export default App
