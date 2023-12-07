import React from "react"
import RoundLink from "./Button/RoundLink"

function HomeIntro() {
    return (
        <>
            <section className="min-h-screen text-white bg-black flex justify-center">
                <div className="m-auto uppercase text-center">
                    <p>A 360° degree solution</p>
                    <h2 className="py-[5rem] normal-case">
                        All-arounD: one complete
                        <br />
                        and versatile system
                        <br />
                        for designing the kitchen
                        <br />
                        of your dreams.
                    </h2>
                    <RoundLink
                        to=""
                        label="Explore our all around system"
                        style="justify-center before:bg-white"
                    />
                </div>
            </section>
        </>
    )
}

export default HomeIntro
