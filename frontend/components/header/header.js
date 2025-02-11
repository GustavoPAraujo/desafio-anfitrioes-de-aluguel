import Image from "next/image";
import Link from "next/link";

export default function Header() {

    return (
        <header className="pl-40 border-b-2 shadow-md">
            <Link href="/">
                <Image
                    src={"/anfitrioes-img.png"}
                    alt="logo"
                    width={100}
                    height={100}
                    className=""
                    />
            </Link>
        </header>
    )
}