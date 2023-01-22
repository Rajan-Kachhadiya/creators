import Link from "next/link"
import {
    LinkedinIcon,
    GithubIcon,
    SkypeIcon,
} from "/components/icons"

export default function Social() {

    const socialItem = [
        {
            icon: <LinkedinIcon />,
            url: "#",
        },
        {
            icon: <GithubIcon />,
            url: "#",
        },
        {
            icon: <SkypeIcon />,
            url: "#",
        },
        {
            icon: <GithubIcon />,
            url: "#",
        },
        {
            icon: <SkypeIcon />,
            url: "#",
        },
    ]
    return (
        <div className="flex items-center gap-10">
            {socialItem.map((item, key) => (
                <Link key={key} target="_blank" href={item.url} className="p-[8px] border-[3px] border-secondary rounded-full inline-block">
                    {item.icon}
                </Link>
            ))}
        </div>
    )
}