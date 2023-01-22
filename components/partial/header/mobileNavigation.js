import React, { useState } from 'react'
import Link from "next/link";
import { CloseIcon, MenuIcon } from "../../icons";

export default function MobileNavigation() {

    const [toggle, setToggle] = useState();

    const handleClick = () => {
        if (toggle) {
            document.body.classList.remove("remove-scroll");
        } else {
            document.body.classList.add("remove-scroll");
        }
        setToggle(!toggle);
    };


    const navigationItem = [
        {
            name: "About",
            url: "/",
        },
        {
            name: "Creators",
            url: "#",
        },
        {
            name: "Submit",
            url: "#",
        },
        {
            name: "Contact",
            url: "#",
        },
    ]

    return (
        <div>
            <div onClick={handleClick} className={toggle && "after:fixed after:z-40 after:w-full after:h-full after:top-0 after:left-0 after:bg-primary/20"}>
                <MenuIcon />
            </div>
            <div className={toggle ? "fixed overflow-auto right-0 top-0 z-50 h-full w-full bg-white sm:max-w-[300px] max-w-[250px] p-20 transition-all duration-500" : "fixed overflow-hidden right-[-100%] top-0 z-50 h-full w-full bg-white sm:max-w-[300px] max-w-[250px] p-20 transition-all duration-500"}>
                <div className='flex justify-between items-center mb-20'>
                    <div className='font-bold'>
                        Menus
                    </div>
                    <div onClick={handleClick}>
                        <CloseIcon />
                    </div>
                </div>
                <div className='flex flex-col items-center gap-30'>
                    {navigationItem.map((item, key) => (
                        <div key={key} onClick={handleClick}>
                            <Link href={item.url} className="uppercase font-medium text-[13px] leading-[20px]">
                                {item.name}
                            </Link>
                        </div>
                    ))}
                    <Link href="#" className="bg-secondary inline-block text-white text-center uppercase font-bold py-[8px] px-30 rounded w-full">
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    )
}