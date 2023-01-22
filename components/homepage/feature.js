import Image from "next/image";
import React from "react";
import {
    DataImage,
    GrowthImage,
    ProtectionImage
} from "/public/images"

export default function Feature() {

    const featureItem = [
        {
            image: GrowthImage,
            content: "Individual site builder, content creation engine & subscrption growth",
        },
        {
            image: DataImage,
            content: "Own and access all of your audience and subscriber data",
        },
        {
            image: ProtectionImage,
            content: "Best-in-class copyright & content protection",
        }
    ]

    return (
        <div className="container">
            <div className="max-w-[768px] mx-auto grid md:grid-cols-3 md:gap-80 gap-30 md:py-80 py-50">
                {featureItem.map((item, key) => (
                    <div key={key} className="flex flex-col items-center">
                        <Image src={item.image} width="200" height="200" alt="Features Image" />
                        <div className="text-center py-10 px-5 mt-20 font-semibold border-t-4 border-t-orange">
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}