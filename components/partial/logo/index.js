import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LogoImage } from "/public/images"

export default function Logo() {
    return (
        <Link href="/">
            <Image src={LogoImage} width="60" height="60" alt="Logo Image" priority/>
        </Link>
    )
}