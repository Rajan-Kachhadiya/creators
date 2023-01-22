import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navigation() {

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
        <div className="flex items-center gap-30">
            {navigationItem.map((item, key) => (
                <div key={key}>
                    <Link href={item.url} className="uppercase font-bold text-secondary">
                        {item.name}
                    </Link>
                </div>
            ))}
            <div>
                <Link href="#" className="bg-secondary inline-block text-white uppercase font-bold py-[8px] px-30 rounded">
                    Log In
                </Link>
            </div>
        </div>
    )
}