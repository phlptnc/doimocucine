import React from "react"
import Banner from "./Banner"

const slidesData = [
    {
        src: "src/assets/home/slides-1.webp",
        description: "Exceptionally classy spaces",
        href: "",
    },
    {
        src: "src/assets/home/slides-2.webp",
        description: "A kitchen that warms the heart",
        href: "",
    },
    {
        src: "src/assets/home/slides-3.webp",
        description: "Exceptionally classy spaces",
        href: "",
    },
    {
        src: "src/assets/home/slides-4.webp",
        description: "A kitchen that warms the heart",
        href: "",
    },
    {
        src: "src/assets/home/slides-5.webp",
        description: "Exceptionally classy spaces",
        href: "",
    },
    {
        src: "src/assets/home/slides-6.webp",
        description: "A kitchen that warms the heart",
        href: "",
    },
]

function Slider() {
    return (
        <>
            <section className="bg-black w-full min-h-screen flex flex-col justify-center mt-[-15rem] relative">
                <div className="container text-white text-center">
                    <Banner
                        title="Inspiration"
                        heading={
                            <h3>
                                Projects by our clients
                                <br />
                                from which to draw inspiration
                            </h3>
                        }
                        label="View all"
                        style="before:bg-white justify-center uppercase"
                    />
                </div>
            </section>
        </>
    )
}

export default Slider
