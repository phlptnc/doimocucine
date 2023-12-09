import React from "react"
import AllAroundHero from "../components/AllAroundHero"
import AlllArountIntro from "../components/AlllArountIntro"
import Banner from "../components/Banner"

function AllAroundSystem() {
    return (
        <>
            <AllAroundHero />
            <AlllArountIntro />
            <section className="min-h-screen w-full flex items-center">
                <div className="container text-center">
                    <Banner
                        title="How does it work"
                        heading={
                            <h2>
                                Once you have chosen the door
                                <br />
                                thickness or typology, let
                                <br />
                                yourself be guided by your taste
                                <br />
                                for materials and finishes and
                                <br />
                                your needs.
                            </h2>
                        }
                        label="Freedom of design"
                        style="before:bg-black justify-center uppercase"
                    />
                </div>
            </section>
        </>
    )
}

export default AllAroundSystem
