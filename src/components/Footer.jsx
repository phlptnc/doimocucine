import React from "react"
import UnderlineBtn from "./Button/UnderlineBtn"
import RoundedBtn from "./Button/RoundedBtn"
import { BsPerson } from "react-icons/bs"

function Footer() {
    return (
        <>
            <footer className="bg-white min-h-screen">
                <div className="max-w-[110rem] min-h-screen m-auto px-4 pt-[5rem] pb-[10rem] flex">
                    <div className="left w-full">
                        <h3 className="pb-10">
                            We believe
                            <br />
                            every kitchen
                            <br />
                            has a soul.
                        </h3>
                        <div className="flex gap-6">
                            <UnderlineBtn
                                to="https://www.instagram.com/"
                                label="Instagram"
                                target="_blank"
                            />
                            <UnderlineBtn
                                to="https://www.facebook.com/"
                                label="Facebook"
                                target="_blank"
                            />
                            <UnderlineBtn
                                to="https://www.linkedin.com/"
                                label="LinkedIn"
                                target="_blank"
                            />
                            <UnderlineBtn
                                to="https://www.youtube.com/"
                                label="Youtube"
                                target="_blank"
                            />
                        </div>
                    </div>
                    <div className="right w-full flex flex-col justify-between">
                        <div className="flex">
                            <div className="w-full">
                                <h4 className="pb-8">Address</h4>
                                <p>
                                    Via Schiavonesca, 78
                                    <br />
                                    loc. Bavaria
                                    <br />
                                    31040 Nervesa della Battaglia
                                    <br />
                                    Treviso – Italy
                                </p>
                            </div>
                            <div className="w-full">
                                <h4 className="pb-8">Contacts</h4>
                                <div className="flex flex-col gap-2">
                                    <p className="flex gap-2">
                                        Tel
                                        <UnderlineBtn label="+39 0422 775611" />
                                    </p>
                                    <p className="flex gap-2">
                                        Fax
                                        <UnderlineBtn label="+39 0422 882082" />
                                    </p>
                                    <UnderlineBtn label="info@doimocucine.com" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="pb-8">Need Support?</h4>
                            <div className="uppercase flex flex-wrap gap-4 max-w-[700px]">
                                <RoundedBtn
                                    label="All-around system"
                                    style="border-[#a6a6a6]"
                                />
                                <RoundedBtn
                                    label="Download"
                                    style="border-[#a6a6a6]"
                                />
                                <RoundedBtn
                                    label="Faq"
                                    style="border-[#a6a6a6]"
                                />
                                <RoundedBtn
                                    label="Suggestions and guides"
                                    style="border-[#a6a6a6]"
                                />
                                <RoundedBtn
                                    label="Contacts"
                                    style="border-[#a6a6a6]"
                                />
                            </div>
                        </div>
                        <div>
                            <UnderlineBtn
                                icon={<BsPerson size={25} />}
                                label="Reserved Area"
                                transform="uppercase"
                                style="flex gap-3 items-center"
                            />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
