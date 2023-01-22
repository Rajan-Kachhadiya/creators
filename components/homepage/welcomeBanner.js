import Link from "next/link";
import React from "react";

export default function WelcomeBanner() {

    return (
        <div className="bg-secondary">
            <div className="container">
                <div className="max-w-[768px] mx-auto text-center text-white py-50">
                    <div className="lg:text-[40px] lg:leading-[47px] text-[24px] leading-[30px] uppercase font-bold md:mb-40 mb-30">
                        Individual Subscription-Based Content Platforms
                    </div>
                    <div className="lg:text-[24px] lg:leading-[30px] text-[20px] leading-[26px] max-w-[550px] mx-auto md:mb-50 mb-30">
                        Determine your own value and get paid fairly,
                        all while having unfettered access to your
                        audience and subscriber data
                    </div>
                    <div>
                        <Link href="#" className="bg-white inline-block text-secondary uppercase font-bold py-10 px-15 rounded mb-15">
                            Browse Creators
                        </Link>
                    </div>
                    <div>
                        <Link href="#" className="text-white inline-block uppercase font-bold hover:underline">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}