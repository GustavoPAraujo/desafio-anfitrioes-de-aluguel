import Image from "next/image";

export default function ModalAcomodacao({ isOpen, onClose, acomodacao, favoritos, atualizarFavoritos  }) {

    if (!isOpen) return null;

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


    const isFavorito = favoritos.some(fav => fav.id === acomodacao.id);

    return (

        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

            <div className="bg-white p-6 pt-2 rounded-lg shadow-lg max-w-lg w-full">

                <button onClick={onClose} className="text-sm mb-2 text-red-500">✖ Sair da Acomodação</button>

                {acomodacao.imagem && (
                    <Image
                        src={acomodacao.imagem}
                        alt={acomodacao.nome}
                        width={1000}
                        height={600}
                        className="mb-2 rounded-lg"
                    />
                )}

                <div className="flex items-center justify-between mt-3">
                    <h1 className="text-xl font-bold">{acomodacao.nome}</h1>

                    <button onClick={() => handleFavoritar(acomodacao)} className="text-2xl">
                        <p className={isFavorito ? "text-yellow-500" : "text-gray-500"}>
                            {isFavorito ? "★" : "☆"}
                        </p>
                    </button>
                </div>

                <p><strong>Localização:</strong> {acomodacao.localizacao}</p>
                <p><strong>Preço por noite:</strong> R$ {acomodacao.preco_noite}</p>
                <p className="text-sm"> ID: {acomodacao.id} </p>

            </div>
        </div>
    );
}
