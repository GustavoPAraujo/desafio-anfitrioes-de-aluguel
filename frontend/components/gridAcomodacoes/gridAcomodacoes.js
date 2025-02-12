import Image from "next/image"

export default function GridAcomodacoes({ acomodacoes, favoritos, atualizarFavoritos }) {

    const handleFavoritar = (acomodacao) => {
        const favoritosSalvos = favoritos;
    
        const isFavorito = favoritosSalvos.some(fav => fav.id === acomodacao.id);
        
        let novosFavoritos;
        if (isFavorito) {
            novosFavoritos = favoritosSalvos.filter(fav => fav.id !== acomodacao.id);
        } else {
            novosFavoritos = [...favoritosSalvos, acomodacao];
        }
    
        localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
    

        atualizarFavoritos(novosFavoritos);
    };
    

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {acomodacoes.length > 0 ? (
                acomodacoes.map((acomodacao) => {
                    const isFavorito = favoritos.some(fav => fav.id === acomodacao.id);
    
                    return (

                        <div key={acomodacao.id} className="border p-4 rounded-lg shadow-lg hover:scale-105 transition delay-75">
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