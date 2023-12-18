import React from "react"
import FadeInScroll from "./Animations/FadeInScroll"

function Values() {
    return (
        <>
            <section className="flex items-center">
                <div className="container">
                    <FadeInScroll>
                        <div className=" max-w-6xl m-auto text-center pb-20 sm:pb-[10rem]">
                            <h2>
                                Freedom. Harmony. Emotion. Culture. Wellbeing.
                            </h2>
                        </div>
                    </FadeInScroll>
                    <div className="flex justify-between sm:flex-row flex-col gap-5">
                        <div className="left uppercase text-sm">
                            <FadeInScroll>Values</FadeInScroll>
                        </div>
                        <div className="right sm:w-3/4 w-full sm:text-xl leading-snug  tracking-wide">
                            <FadeInScroll>
                                <div className="flex flex-col gap-6">
                                    <p>
                                        <b>Style</b> We use a linear, direct and
                                        contemporary language, born of a deeply
                                        rooted culture of design.
                                    </p>
                                    <p>
                                        <b>Reliability</b> We keep our promises,
                                        with professionalism, concreteness and a
                                        talent for problem solving.
                                    </p>
                                    <p>
                                        <b>Ethics</b> Transparency,
                                        trustworthiness and sustainability are
                                        the guiding principles of our activities
                                        and our relationships with people.
                                    </p>
                                    <p>
                                        <b>Elegance</b> Harmony, sophistication
                                        and fascination are more than simply
                                        aesthetic attributes for us. They are an
                                        authentic synthesis of being and
                                        appearing.
                                    </p>
                                    <p>
                                        <b>Freedom of Design</b> We went beyond
                                        the concept of the collection to create
                                        a transversal kitchen system that can be
                                        customised to the needs of each
                                        individual client.
                                    </p>
                                    <p>
                                        Values that bring authentic meaning to
                                        each moment, and which last forever. So
                                        that we can nurture all that we hold
                                        most precious, in our homes and in our
                                        lives.
                                    </p>
                                </div>
                            </FadeInScroll>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Values
