import Image, { StaticImageData } from "next/image"
import React from "react"

type BoxBannerProps = {
    src: StaticImageData,
    sx: string
}

export const BoxBanner:React.FC<BoxBannerProps> = (props) => {

    const {src, sx} = props
    
    return (
        <div className={`${sx} overflow-hidden `}>
            <div className="hover:scale-105 transition ease-in duration-300">
                <Image src={src} alt=""/>
            </div>
        </div>
    )
}