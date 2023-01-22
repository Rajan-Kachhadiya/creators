import React from "react";
import Social from "../social";

export default function Footer() {

    let currentYear = new Date().getFullYear();

    return (
        <div className="bg-gray">
            <div className="container md:pt-80 md:pb-150 sm:py-50 py-30 footer flex md:justify-end justify-center">
                <Social />
            </div>
        </div>
    )
}