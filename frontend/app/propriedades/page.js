'use client'

import { todasAcomodacoes } from "@/services/propertyServices";
import { useState, useEffect } from 'react'
import SearchBar from "@/components/searchBar/searchBar"
import GridAcomodacoes from "@/components/gridAcomodacoes/gridAcomodacoes";

export default function Propriedades() {

    const [acomodacoes, setAcomodacoes] = useState([]);

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

    return (
        <>
            <SearchBar />
            <GridAcomodacoes acomodacoes={acomodacoes}></GridAcomodacoes>

        </>
    );
}
