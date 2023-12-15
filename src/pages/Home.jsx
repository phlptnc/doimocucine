import React, { useEffect, useRef } from "react"
import Hero from "../components/Hero"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import HomeIntro from "../components/HomeIntro"
import Video from "../components/Video"
import Slider from "../components/Slider"

function Home() {
    return (
        <>
            <Hero />
            <HomeIntro />
            <Video />
            <Slider />
        </>
    )
}

export default Home
