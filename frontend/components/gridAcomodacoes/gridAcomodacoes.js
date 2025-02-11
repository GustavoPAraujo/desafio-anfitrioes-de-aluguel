

export default function GridAcomodacoes({acomodacoes}) {

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {acomodacoes.length > 0 ? (
            acomodacoes.map((acomodacao) => (
                <div key={acomodacao.id} className="border p-4 rounded-lg shadow-lg">
                    <h2 className="text-lg font-bold">{acomodacao.nome}</h2>
                    <p className="text-gray-600">Localização: {acomodacao.localizacao}</p>
                    <p className="text-gray-800 font-semibold">R$ {acomodacao.preco_noite}/noite</p>
                </div>
            ))
        ) : (
            <p className="text-gray-500 text-center col-span-3">Nenhuma acomodação encontrada.</p>
        )}
    </div>
    )
}