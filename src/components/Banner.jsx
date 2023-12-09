import React from "react"
import FadeInScroll from "./Animations/FadeInScroll"
import RoundLink from "./Button/RoundLink"

function Banner(props) {
    return (
        <>
            <FadeInScroll>
                <p className="text-[0.9rem] uppercase">{props.title}</p>
                <h3 className="py-[5rem]">{props.heading}</h3>
                <RoundLink label={props.label} style={props.style} />
            </FadeInScroll>
        </>
    )
}

export default Banner
