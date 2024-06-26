import React, { ReactElement, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

type ModelProps = {
    onClose: () => void
    render: ReactElement
    top?: string,
    bottom?: string,
    left?:string,
    right?:string
}

export const Model:React.FC<ModelProps> = ({onClose, render, top, bottom, left, right}) => {

    const ref = useRef<Element | null>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        document.documentElement.classList.add("model-open")
        ref.current = document.querySelector('#model-container')
        setMounted(true)
        return () => {
            document.documentElement.classList.remove("model-open")
        }
    }, [])

    return mounted ?
        createPortal(
            <div>
                <div style={{
                    position: 'fixed',
                    background: "gray",
                    opacity: 0.6,
                    left: 0,
                    top: 0,
                    bottom: 0,
                    right: 0,
                    zIndex:999
                }} onClick={onClose}></div>
                <div style={{
                    position: 'fixed',
                    padding: '10px',
                    backgroundColor: 'white',
                    left: left || '20%',
                    top: top || '20%',
                    bottom: bottom || '20%',
                    right: right || '20%',
                    borderRadius: '14px',
                    zIndex: 9999
                }}>
                    {
                        render
                    }
                </div>
            </div>,
            ref.current as Element
        ) : null
}