
import Link from "next/link";

export default function Home() {

  return (

    <>
      <div className="h-full flex flex-row justify-evenly mt-14 pl-32">

        <div className="w-3/5 max-w-3xl shadow-2xl p-16">

          <h1 className="text-3xl font-medium mb-6">Sobre</h1>

          <p className="text-md font-normal text-zinc-500 mb-6">
            Os Anfitriões de Aluguel são uma rede colaborativa de anfitriões profissionais dedicados a proporcionar segurança,
            tranquilidade e rendimentos espetaculares para proprietários de imóveis que querem oferecer suas casas e apartamentos
            em plataformas digitais como AirBnB e Booking.
          </p>

          <p className="text-md font-normal text-zinc-500 mb-6">
            Se você busca um local para se hospedar, aqui é também o seu lugar. Criamos experiências inesquecíveis,
            oferecendo praticidade,  conforto e segurança, em ambientes limpos, funcionais e agradáveis.
          </p>

          <p className="text-md font-normal text-zinc-500">
            Já são mais de 5200 reservas atendidas desde agosto de 2018 em mais de 260 propriedades em múltiplas regiões.
          </p>

        </div>

        <div className="w-2/5 flex items-center justify-center">

          <Link href="/propriedades">
            <button className="p-4 bg-gradient-to-r from-red-500 to-blue-600 text-white rounded-md
                               hover:from-red-600 hover:to-blue-700 transition duration-300 ease-in-out
                               hover:scale-105">
              <h1>Clique aqui e conheça mais sobre nossas propriedades</h1>
            </button>
          </Link>

        </div>

      </div>

    </>
  );
}
