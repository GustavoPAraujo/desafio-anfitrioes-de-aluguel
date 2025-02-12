import Image from "next/image"
import { useState, useEffect } from "react";

export default function GridAcomodacoes({ acomodacoes }) {
    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        const favoritosSalvos = JSON.parse(localStorage.getItem("favoritos")) || [];
        setFavoritos(favoritosSalvos);
    }, []);

    const handleFavoritar = (acomodacao) => {
        let novosFavoritos = [...favoritos];
        const index = novosFavoritos.findIndex(fav => fav.id === acomodacao.id);

        if (index === -1) {
            // Adiciona se ainda não estiver favoritado
            novosFavoritos.push(acomodacao);
        } else {
            // Remove se já estiver favoritado
            novosFavoritos.splice(index, 1);
        }

        setFavoritos(novosFavoritos);
        localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {acomodacoes.length > 0 ? (
                acomodacoes.map((acomodacao) => { // <- Início do map()
                    const isFavorito = favoritos.some(fav => fav.id === acomodacao.id);
    
                    return ( // <- Este return retorna JSX para cada acomodação
                        <div key={acomodacao.id} className="border p-4 rounded-lg shadow-lg">
                            {acomodacao.imagem && (
                                <div className="relative w-full h-48">
                                    <Image
                                        src={acomodacao.imagem}
                                        alt={acomodacao.nome}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg"
                                    />
                                </div>
                            )}

                            <div className="flex items-center justify-between mt-3">
                                <h2 className="text-lg font-bold">{acomodacao.nome}</h2>

                                <button onClick={() => handleFavoritar(acomodacao)} className="text-2xl">
                                    <p className={isFavorito ? "text-yellow-500" : "text-gray-500"}>
                                        {isFavorito ? "★" : "☆"}
                                    </p>
                                </button>
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
    );
    
    
}