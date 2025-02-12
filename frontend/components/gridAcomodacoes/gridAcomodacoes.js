import Image from "next/image"

import ModalAcomodacao from "../modalAcomodacao/modalAcomodacao";
import { useState } from "react";

export default function GridAcomodacoes({ acomodacoes, favoritos, atualizarFavoritos }) {
    const [modalOpen, setModalOpen] = useState(false)
    const [acomodacaoSelecionada, setAcomodacaoSelecionada] = useState(null)

    const handleOpenModalAcomodacao = (acomodacao) => {
        setAcomodacaoSelecionada(acomodacao)
        setModalOpen(true)
    }
    const handleCloseModalAcomodacao = () => {
        setModalOpen(false)
        setAcomodacaoSelecionada(null)
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {acomodacoes.length > 0 ? (
                    acomodacoes.map((acomodacao) => {
                        const isFavorito = favoritos.some(fav => fav.id === acomodacao.id);

                        return (

                            <div
                                key={acomodacao.id}
                                onClick={() => handleOpenModalAcomodacao(acomodacao)}
                                className="border p-4 rounded-lg shadow-lg hover:scale-105 transition delay-75"
                            >

                                {acomodacao.imagem && (
                                    <div className="relative w-full h-48">
                                        <Image
                                            src={acomodacao.imagem}
                                            alt={acomodacao.nome}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            fill
                                            priority
                                            className="rounded-lg object-cover"
                                        />
                                    </div>
                                )}

                                <div className="flex items-center justify-between mt-3">
                                    <h2 className="text-lg font-bold">{acomodacao.nome}</h2>

                                    <p className={isFavorito ? "text-yellow-500 text-2xl" : "text-gray-500 text-2xl"}>
                                        {isFavorito ? "★" : "☆"}
                                    </p>

                                </div>
                                <p className="text-gray-600">Localização: {acomodacao.localizacao}</p>
                                <p className="text-gray-800 font-semibold">R$ {acomodacao.preco_noite}/noite</p>

                            </div>
                        );
                    })
                ) : (
                    <p className="text-gray-500 text-center col-span-3">Nenhuma acomodação encontrada.</p>
                )}
            </div>

            <ModalAcomodacao
                isOpen={modalOpen}
                onClose={handleCloseModalAcomodacao}
                acomodacao={acomodacaoSelecionada}
                favoritos={favoritos}
                atualizarFavoritos={atualizarFavoritos}
            ></ModalAcomodacao>

        </>
    );


}