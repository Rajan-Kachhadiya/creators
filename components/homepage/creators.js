import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    CreatorImage1,
    CreatorImage2,
} from "/public/images"

export default function Creators() {

    return (
        <div className="container relative md:pt-150 md:my-80 my-50">
            <div className="grid md:grid-cols-3 gap-30 md:absolute top-0 left-0 md:mb-0 mb-20">
                <div>
                    <Image src={CreatorImage1} width="500" height="500" alt="Creator Image" />
                </div>
                <div>
                    <Image src={CreatorImage2} width="500" height="500" alt="Creator Image" />
                </div>
                <div>
                    <Image src={CreatorImage1} width="500" height="500" alt="Creator Image" />
                </div>
            </div>
            <div className="max-w-[768px] mx-auto border-4 border-orange md:px-30 lg:pt-[250px] md:pt-150 md:pb-20 p-20">
                <div className="uppercase text-secondary font-extrabold  md:text-[60px] mb-10 md:leading-[70px] text-[24px] leading-[30px]">
                    Creators
                </div>
                <div className="font-semibold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui eaque veniam nobis in, eos modi nihil, nemo optio autem cupiditate temporibus fugit.
                </div>
                <div className="flex gap-30 mt-15">
                    <Link href="#" className="text-secondary inline-block uppercase font-bold hover:underline">
                        Browse
                    </Link>
                    <Link href="#" className="text-secondary inline-block uppercase font-bold hover:underline">
                        Apply
                    </Link>
                </div>
            </div>
        </div>
    )
}