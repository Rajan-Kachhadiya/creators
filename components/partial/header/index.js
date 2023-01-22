import React, { useEffect, useState } from "react";
import Logo from "../logo";
import Navigation from "./navigation";
import MobileNavigation from "./mobileNavigation";

export default function Header() {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 90);
        });
    }, []);

    return (
        <div className={scroll ? "is-sticky md:py-30 py-20 bg-white z-50 sticky top-0 shadow-md" : "md:py-30 py-20 bg-white z-50"}>
            <div className="container flex lg:items-end items-center justify-between gap-30">
                <Logo />
                <div className="lg:block hidden">
                    <Navigation />
                </div>
                <div className="lg:hidden block">
                    <MobileNavigation />
                </div>
            </div>
        </div>
    )
}