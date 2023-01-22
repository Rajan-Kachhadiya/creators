import Link from "next/link";
import React from "react";

export default function About() {

    return (
        <div className="container">
            <div className="relative max-w-[768px] mx-auto border-4 border-orange md:my-50 my-30 md:px-30 md:pt-40 md:pb-20 p-20">
                <div className="uppercase text-secondary font-extrabold bg-white md:text-[60px] md:mb-0 mb-10 md:leading-[70px] text-[24px] leading-[30px] md:px-15 md:absolute -top-40 left-20">
                    About
                </div>
                <div className="font-semibold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui eaque veniam nobis in, eos modi nihil, nemo optio autem cupiditate temporibus fugit, error odio tempore voluptates aliquam provident! Culpa, voluptates eius! Quisquam qui, quaerat maiores iste ut officia, quas sapiente doloribus voluptatum molestiae totam voluptas, eligendi eius voluptatibus dolore eveniet veniam debitis dignissimos a? Dolorum esse rem earum vitae? Assumenda aliquid, id mollitia tempora, molestias quas cumque at dolor consectetur repellat eveniet porro asperiores temporibus delectus. Sed soluta quis minus!
                </div>
                <div>
                    <Link href="#" className="text-secondary inline-block uppercase font-bold hover:underline mt-15">
                        More
                    </Link>
                </div>
            </div>
        </div>
    )
}