import vietnamFlag from "@/assets/flags/vietnam.png";
import englandFlag from "@/assets/flags/england.png";

import Image from "next/image";
import { useI18n } from "../../hooks/useI18n";
import { useRef, useState } from "react";
import { CustomMenu } from "../CustomMenu/CustomMenu";
import { MenuItem } from "@mui/material";

const flag: { [key: string]: { title: string; src: any } } = {
    vi: {
        title: "Tiếng Việt",
        src: vietnamFlag,
    },
    en: {
        title: "English",
        src: englandFlag,
    },
};

export const Language = () => {
    const [open, setOpen] = useState(false);

    const { locale, changeLocale } = useI18n();
    const ref = useRef(null);

    return (
        <>
            <Image ref={ref} src={flag[locale].src} alt={flag[locale].title} width={32} height={32} onClick={() => setOpen(true)} className="border-2 rounded-lg" />
            <CustomMenu anchorEl={ref.current} open={open} onClose={() => setOpen(false)}>
                {Object.keys(flag).map((key) => {
                    return (
                        <MenuItem key={key}>
                            <div className="flex items-center gap-2">
                                <Image src={flag[key].src} alt={flag[key].title} width={20} height={20} />
                                <span onClick={() => changeLocale(key as "en" | "vi")} className="text-sm">
                                    {flag[key].title}
                                </span>
                            </div>
                        </MenuItem>
                    );
                })}
            </CustomMenu>
        </>
    );
};
