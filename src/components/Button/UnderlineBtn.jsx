import React from "react"
import { Link } from "react-router-dom"

function UnderlineBtn(props) {
    return (
        <>
            <Link
                to={props.to}
                className={` ${props.transform} overflow-hidden relative flex items-center after:h-[1px] after:w-full after:bg-black after:absolute after:bottom-0 after:left-0 after:translate-x-[-100%] after:ease-in-out after:duration-1000 after:hover:translate-x-0`}
                target={props.target}
            >
                {props.icon}
                {props.label}
            </Link>
            <section></section>
        </>
    )
}

export default UnderlineBtn
