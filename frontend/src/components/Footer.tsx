import Image from "next/image";
import logo from "@/assets/logo.png";

export const Footer = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                <div className="flex flex-col flex-1 px-3">
                    <div className="h-8 mb-12 rounded flex items-center justify-start mr-6 cursor-pointer">
                        <Image src={logo} alt={"logo"} className="w-[8rem]" />
                    </div>
                    <span className="text-sm py-1">Address: 123 Main Street, Anytown, CA 12345 - USA.</span>

                    <span className="text-sm py-1">Phone: +(000) 800 456 789</span>

                    <span className="text-sm py-1">Email: Contact@posthemes.com</span>
                </div>
                <div className="flex-1 flex flex-col px-3">
                    <h1 className="pb-3 text-lg font-semibold">Product</h1>
                    <span className="text-sm py-1">Prices Drop</span>
                    <span className="text-sm py-1">New Products</span>
                    <span className="text-sm py-1">Best Sales</span>
                    <span className="text-sm py-1">Contact Us</span>
                    <span className="text-sm py-1">My Account</span>
                </div>
                <div className="flex-1 flex flex-col px-3">
                    <h1 className="pb-3 text-lg font-semibold">Login</h1>
                    <span className="text-sm py-1">Sitemap</span>
                    <span className="text-sm py-1">Stores</span>
                    <span className="text-sm py-1">Login</span>
                    <span className="text-sm py-1">Contact Us</span>
                    <span className="text-sm py-1">My Account</span>
                </div>
                <div className="flex-1 flex flex-col px-3">
                    <h1 className="pb-3 text-lg font-semibold">Login</h1>
                    <span className="text-sm py-1">Sitemap</span>
                    <span className="text-sm py-1">Stores</span>
                    <span className="text-sm py-1">Login</span>
                    <span className="text-sm py-1">Contact Us</span>
                    <span className="text-sm py-1">My Account</span>
                </div>
            </div>
        </>
    );
};
