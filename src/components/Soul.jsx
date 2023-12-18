import React from "react"
import FadeInScroll from "./Animations/FadeInScroll"

function Soul() {
    return (
        <>
            <section>
                <div className="container flex justify-between sm:flex-row flex-col gap-5">
                    <FadeInScroll>
                        <div className="left uppercase text-sm">Our soul</div>
                    </FadeInScroll>
                    <div className="right w-full sm:w-3/4 ">
                        <FadeInScroll>
                            <div className="sm:text-xl leading-snug flex flex-col gap-4 sm:gap-6 tracking-wide">
                                <p>We believe every kitchen has a soul.</p>
                                <p>
                                    It is the passion, experience and creativity
                                    we dedicate to its design and fabrication.
                                </p>
                                <p>
                                    It is the internal universe, made of the
                                    dreams, desires, feelings and stories people
                                    experience in the kitchen every day. The
                                    expectation that Doimo Cucine can
                                    interpreter and transform the most important
                                    and intimate space of the home into a
                                    reflection of who we are.
                                </p>
                                <p>
                                    This encounter made of affinities, sharing
                                    and relationships is what creates our idea
                                    of the kitchen. A concept that surpasses the
                                    simple dimension of a product to express
                                    profound and personal meanings through
                                    materials, technologies, design and how our
                                    retailers approach every project.
                                </p>
                            </div>
                        </FadeInScroll>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Soul
