import React from "react"
import AllAroundHero from "../components/AllAroundHero"
import AlllArountIntro from "../components/AlllArountIntro"
import Banner from "../components/Banner"
import Kitchen from "../components/Kitchen"
import Aspen from "../assets/kitchen/aspen.webp"
import AspenThickness from "../assets/kitchen/aspen-thickness.svg"
import D12 from "../assets/kitchen/d12.webp"
import D12Thickness from "../assets/kitchen/d12-thickness.svg"
import D20 from "../assets/kitchen/d20.webp"
import D20Thickness from "../assets/kitchen/d20-thickness.svg"
import D23 from "../assets/kitchen/d23.webp"
import D23Thickness from "../assets/kitchen/d23-thickness.svg"

function AllAroundSystem() {
    return (
        <>
            <AllAroundHero />
            <AlllArountIntro />
            <Kitchen
                title="Aspen"
                id="aspen"
                background={Aspen}
                href=""
                number="01"
                description="this is the variation of all-around with a 100% recyclable aluminium structure, visible inside the door. the exterior is finished is a range of panels, including lacquered glass, wood, stratificato hpl, ceramic, mdi or fenix ntm® and nta®. doors are available in 20 or 23 mm thicknesses, with groove or push-pull handle systems."
                svg={AspenThickness}
                thickness="20-23 mm"
            />
            <Kitchen
                title="D12"
                id="d12"
                background={D12}
                flex="flex-row-reverse"
                href=""
                number="02"
                description="this is the thinnest version of all-around, at just 12 mm, with a 100% recyclable aluminium core. doors can be lacquered, glossy or matt, painted in satin or crossed lacquer, overlaid with sheets of fenix ntm® or veneered, and fitted with groove or push-pull handle systems."
                svg={D12Thickness}
                thickness="12 mm"
            />
            <Kitchen
                title="D20"
                id="d20"
                background={D20}
                href=""
                number="03"
                description="this is a version of all-around with 20 mm doors to be combined with the aspen door of the same thickness. the slab door with 4 straight edges can be fitted with a groove, applied handle or push-pull system. it is prefect for those who love colour – thanks to the availability of the entire range of plain colour tecnolam and lacquers – and for those with an eye on cost."
                svg={D20Thickness}
                thickness="20 mm"
            />
            <Kitchen
                title="D23"
                id="d23"
                background={D23}
                flex="flex-row-reverse"
                href=""
                number="04"
                description="the thicker 23 mm door is the richest version of allaround. doors can be slabs with 4 straight edges with an integrated rail handle, 30° chamfer, “l” profile, raised edge or framed; handle systems range from applied handles, to push-pull and groove or flat groove versions; finishes range from tecnolam to synchroface, xmatt and xgloss, lacquered, fenix ntm® and nta® and wood."
                svg={D23Thickness}
                thickness="23 mm"
            />
            <section className="min-h-screen w-full flex items-center">
                <div className="container text-center">
                    <Banner
                        title="How does it work"
                        heading={
                            <h2>
                                Once you have chosen the door
                                <br />
                                thickness or typology, let
                                <br />
                                yourself be guided by your taste
                                <br />
                                for materials and finishes and
                                <br />
                                your needs.
                            </h2>
                        }
                        label="Freedom of design"
                        style="before:bg-black justify-center uppercase"
                    />
                </div>
            </section>
        </>
    )
}

export default AllAroundSystem
