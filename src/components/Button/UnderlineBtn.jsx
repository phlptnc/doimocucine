import React from "react"
import { Link } from "react-router-dom"

function UnderlineBtn(props) {
    return (
        <>
            <Link
                to={props.to}
                target={props.target}
                className={` ${props.style} underline-btn w-fit h-fit`}
            >
                {props.icon}
                <span
                    className={` ${props.transform} overflow-hidden h-fit w-fit relative flex items-center after:h-[1px] after:w-full after:bg-black after:absolute after:bottom-0 after:left-0 after:translate-x-[-100%] after:ease-in-out after:duration-1000 `}
                >
                    {props.label}
                </span>
            </Link>
        </>
    )
}

export default UnderlineBtn
