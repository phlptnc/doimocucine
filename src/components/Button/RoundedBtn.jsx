import React from "react"
import { Link } from "react-router-dom"

function RoundedBtn(props) {
    return (
        <>
            <Link
                to={props.to}
                className={`${props.transform} border-[1px] px-8 py-3 rounded-full ease-in-out duration-300 hover:border-black`}
                target={props.target}
            >
                {props.label}
            </Link>
        </>
    )
}

export default RoundedBtn
