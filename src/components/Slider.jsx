import React from "react"
import RoundLink from "./Button/RoundLink"
import Slider1 from "../assets/home/slides-1.webp"
import FadeInScroll from "./Animations/FadeInScroll"
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
                {/* <div className=" bg-[pink] w-full h-full relative outline outline-1 outline-yellow-400 py-40">
                    <div className=" w-full h-full relative">
                        <div className="wrapper h-full w-full absolute left-0 top-0 flex flex-row">
                            {slidesData.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-[80%] h-full px-[4vw] absolute top-0 left-0"
                                >
                                    <div className="">
                                        <img
                                            src={item.src}
                                            alt=""
                                            className=" h-full w-full"
                                        />
                                    </div>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
            </section>
        </>
    )
}

export default Slider
