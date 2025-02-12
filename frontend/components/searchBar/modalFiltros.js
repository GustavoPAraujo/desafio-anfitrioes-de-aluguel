'use client'

export default function ModalLocalizacao({ isOpen, onClose, cidades, onSelectCidade }) {
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-lg xs:w-80 sm:w-96">
                <h3 className="text-lg font-bold mb-4">Selecione uma Localização</h3>
                <ul>
                    
                    {cidades.length > 0 ? (
                        cidades.map((cidade, index) => (
                            <li 
                                key={index} 
                                onClick={() => onSelectCidade(cidade)} 
                                className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                            >
                                {cidade}
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-500">Nenhuma cidade disponível.</p>
                    )}
                </ul>

                <ul>
                    <li 
                        onClick={() => onSelectCidade(null)}
                        className="cursor-pointer hover:bg-red-100 p-2 rounded mt-4"
                    >Limpar filtros</li>
                </ul>

                <button 
                    onClick={onClose} 
                    className="mt-4 w-full bg-gray-200 hover:bg-gray-400 text-gray-800 py-2 rounded-lg"
                >
                    Fechar
                </button>
            </div>
        </div>
    );
}
