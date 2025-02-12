'use client'

import { todasAcomodacoes, localizacoes, acomodacoesPorCidade } from "@/services/propertyServices";
import { useState, useEffect } from 'react'
import SearchBar from "@/components/searchBar/searchBar"
import GridAcomodacoes from "@/components/gridAcomodacoes/gridAcomodacoes";
import ModalLocalizacao from "@/components/modalLocalizacao/modalFiltros"

export default function Propriedades() {
    const [acomodacoes, setAcomodacoes] = useState([]);
    const [cidades, setCidades] = useState([]);
    const [cidadeSelecionada, setCidadeSelecionada] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [favoritos, setFavoritos] = useState([]);


    useEffect(() => {
        const getAcomodacoes = async () => {
            try {
                const result = await todasAcomodacoes();
    
                setAcomodacoes(result.map(acomodacao => ({
                    id: acomodacao[0],
                    nome: acomodacao[1],
                    imagem: acomodacao[2],
                    preco_noite: acomodacao[3],
                    localizacao: acomodacao[4]
                })));

            } catch (error) {
                console.error("Erro ao buscar acomodações:", error);
            }
        };

        getAcomodacoes();
    }, []);

    useEffect(() => {
        const getCidades = async () => {
            try {
                const result = await localizacoes()

                setCidades(result)

            } catch (error) {
                console.error("Erro ao buscar cidades:", error);
            }
        };
        getCidades()
    }, []);

    useEffect(() => {
        const syncFavoritos = () => {
            const favoritosSalvos = JSON.parse(localStorage.getItem("favoritos")) || [];
            setFavoritos(favoritosSalvos);
        };

        window.addEventListener("storage", syncFavoritos);

        return () => {
            window.removeEventListener("storage", syncFavoritos);
        };
    }, []);

    const handleOpenModal = () => {
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setModalOpen(false)
    }

    const handleSelectCidade = async (cidade) => {
        setCidadeSelecionada(cidade);
        setModalOpen(false);

        try {
            const result = await acomodacoesPorCidade(cidade)
            setAcomodacoes(result.map(acomodacao => ({
                id: acomodacao[0],
                nome: acomodacao[1],
                imagem: acomodacao[2],
                preco_noite: acomodacao[3],
                localizacao: acomodacao[4]
            })))

        } catch (error) {
            console.error("Erro ao buscar acomodações em: ", cidade, error);
        }
    };

    const handleShowFavoritos = () => {
        setAcomodacoes(favoritos)
    }

    return (
        <>
            <SearchBar
                openModal={handleOpenModal}
            />

            <ModalLocalizacao
                isOpen={modalOpen}
                onClose={handleCloseModal}
                cidades={cidades}
                onSelectCidade={handleSelectCidade}
            />

            <div className="flex justify-between items-center mt-6">

                {cidadeSelecionada !== null ?
                    <h2 className="ml-6">
                        Acomodações disponíveis em:
                        <span className="text-blue-600 font-semibold ml-2">{cidadeSelecionada}</span>
                    </h2>
                    : 
                    <h2 className="ml-6">
                        Acomodações disponíveis em:
                        <button 
                            className="text-blue-600 hover:text-blue-500 font-semibold underline ml-2"
                            onClick={handleOpenModal}
                            >
                            Selecione uma cidade
                        </button>
                    </h2>
                    }

                {favoritos.length > 0 && (
                    <h2 className="mr-6">
                        <button 
                            className="text-blue-600 hover:text-blue-500 font-semibold underline ml-2"
                            onClick={handleShowFavoritos}
                        >
                            Meus favoritos!
                        </button>
                    </h2>
                )}

            </div>

            <GridAcomodacoes acomodacoes={acomodacoes}  favoritos={favoritos}  atualizarFavoritos={setFavoritos}></GridAcomodacoes>

        </>
    );
}
