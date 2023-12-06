import React from "react"
import { Link } from "react-router-dom"

function RoundedBtn(props) {
    return (
        <>
            <Link
                to={props.to}
                className={`${props.transform} ${props.style} border-[1px] border-black px-8 py-3 rounded-full ease-in-out duration-300 hover:border-black`}
                target={props.target}
            >
                {props.icon}
                {props.label}
            </Link>
        </>
    )
}

export default RoundedBtn
