'use client'

import { todasAcomodacoes, localizacoes, acomodacoesPorCidade } from "@/services/propertyServices";
import { useState, useEffect } from 'react'
import SearchBar from "@/components/searchBar/searchBar"
import GridAcomodacoes from "@/components/gridAcomodacoes/gridAcomodacoes";
import ModalLocalizacao from "@/components/searchBar/modalFiltros"

export default function Propriedades() {

    const [acomodacoes, setAcomodacoes] = useState([]);
    const [cidades, setCidades] = useState([]);
    const [cidadeSelecionada, setCidadeSelecionada] = useState(null);

    const [modalOpen, setModalOpen] = useState(false);


    useEffect(() => {
        const getAcomodacoes = async () => {
            try {
                const result = await todasAcomodacoes()
                setAcomodacoes(result)

            } catch (error) {
                console.error("Erro ao buscar acomodações:", error);
            }
        };
        
        getAcomodacoes();
    }, []);
    
    useEffect(() => {
        const getCidades = async () => {
            try{
                const result = await localizacoes()
                setCidades(result)
                
            }catch(error){
                console.error("Erro ao buscar cidades:", error);
            }
        };
        getCidades()
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
        
        try{
            const result = await acomodacoesPorCidade(cidade)
            setAcomodacoes(result)

        }catch(error){
            console.error("Erro ao buscar acomodações em: ", cidade, error);
        }
    };

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

            {cidadeSelecionada !== null ? 
                <h2 className="ml-6">
                    Acomodações disponíveis em:
                    <span className="text-blue-600 font-semibold ml-2">{cidadeSelecionada}</span>
                </h2> 
            : false }
            
            <GridAcomodacoes acomodacoes={acomodacoes}></GridAcomodacoes>

        </>
    );
}
