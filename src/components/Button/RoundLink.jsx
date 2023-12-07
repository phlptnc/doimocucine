import React from "react"
import { Link } from "react-router-dom"

function RoundLink(props) {
    return (
        <>
            <Link
                to={props.to}
                className={`${props.style} flex items-center gap-4 before:w-4 before:h-4 before:rounded-full before:duration-500 hover:before:scale-150`}
            >
                {props.label}
            </Link>
        </>
    )
}

export default RoundLink
