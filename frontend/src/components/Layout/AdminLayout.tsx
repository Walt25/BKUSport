import { BiSearch } from "react-icons/bi"
import { FaBell } from "react-icons/fa"
import { IoMdMenu } from "react-icons/io"
import { AdminNavbar } from "../../components/Admin/Navigation"
import { ReactElement, useState } from "react"
import { Header } from "../Header"
import { I18nProvider } from "@/contexts/I18n"

type AdminLayoutProps = {
    children: ReactElement
}

export const AdminLayout:React.FC<AdminLayoutProps> = ({children}) => {

    const [openNavbar, setOpenNavbar] = useState(false)
    const handleOpenNavbar = () => {
        setOpenNavbar(!openNavbar)
    }

    return (
        <I18nProvider>
            <div className="flex flex-row w-full">
                <div className="w-[200px]" hidden={openNavbar}>
                    <AdminNavbar />
                </div>
                <div className="flex flex-col flex-1">
                    <div style={{ zIndex: 99 }} className="sticky top-0 w-full">
                        <Header />
                    </div>
                    <div className="bg-[#f5f7fa] overflow-y-auto">
                        {children}
                    </div>
                </div>
            </div>
        </I18nProvider>
    )
}