import Image from "next/image";
import Link from "next/link";

export default function Header() {

    return (
        <header className="flex flex-row items-center justify-between pr-20 mb-10 pl-40 border-b-2 shadow-md">
            <Link href="/">
                <Image
                    src={"/anfitrioes-img.png"}
                    alt="logo"
                    width={100}
                    height={100}
                    className=""
                    priority
                    />
            </Link>
            <nav>
                <Link href="/propriedades">
                    <p className="text-blue-600 hover:text-blue-800 ">Acomodações Diesponíveis</p>
                </Link>

            </nav>
        </header>
    )
}