import Image from "next/image";
import Link from "next/link";

export default function Header() {

    return (
        <header className="flex flex-row items-center justify-center 
                            p-0 mb-10 border-b-2 shadow-md
                            sm:pr-20 sm:pl-40 sm:justify-between ">
            <Link href="/">
                <Image
                    src={"/anfitrioes-img.png"}
                    alt="logo"
                    width={100}
                    height={100}
                    />
            </Link>
            <nav className="hidden sm:block">
                <Link href="/propriedades">
                    <p className="text-blue-600 hover:text-blue-800 sm: ">Acomodações Diesponíveis</p>
                </Link>

            </nav>
        </header>
    )
}
