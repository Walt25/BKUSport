import { Checkbox } from "@mui/material"
import { url } from "inspector"
import { useState } from "react"

type ProductImageProps = {
    src: string,
    onCheck: (src: string) => void
}

export const ProductImage:React.FC<ProductImageProps> = ({src, onCheck}) => {

    const [isCheck, setIsCheck] = useState(false)
    const handleCheck = () => {
        setIsCheck(!isCheck)
        onCheck(src)
    }

    return (
        <div className="group border relative"><img src={src} alt="pic"/>
            <Checkbox className={`hover:bg-white p-0 m-0 ${!isCheck && "hidden"} rounded-none group-hover:flex absolute top-0 right-0 bg-white`} onChange={handleCheck}/>
        </div>
    )
}