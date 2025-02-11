'use client'

import { acomodacoes, acomodacoesPorId, acomodacoesPorCidade } from "@/services/propertyServices"

import { useState } from "react";

export default function Propriedades(){
    const [id, setId] = useState("");
    const [cidade, setCidade] = useState("");


    const getAcomodacoes = async () => {
        const result = await acomodacoes()
        console.log(result)
    }


    const handleIdChange = (e) =>{
        setId(e.target.value)
    }
    const getAcomodacoesPorId = async () => {

        id.toString() 
        const result = await acomodacoesPorId(id)
        console.log(result)
    }
     

    const handleCityChange = (e) =>{
        setCidade(e.target.value)
    }
    const getAcomodacoesPorCidade = async () => {

        const cidadeFiltrada = cidade.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        const result = await acomodacoesPorCidade(cidadeFiltrada)
        console.log(result)
    }

    return(
        <>
            <div className="flex flex-col">

                <div className="ml-40 mb-10">
                    <h1>todas as acomodacoes</h1>
                    <button onClick={getAcomodacoes}>aqui</button>

                </div>

                <div className="ml-40 mb-10">
                    <h1>todas as acomodacoes por Id</h1>
                    <input 
                        className="border-2 mr-2" 
                        type="number"
                        onChange={handleIdChange}
                        />
                    <button onClick={getAcomodacoesPorId} >aqui</button>
                </div>

                <div className="ml-40 mb-10">
                    <h1>todas as acomodacoes por cidade</h1>
                    <input 
                        className="border-2 mr-2" 
                        type="text"
                        onChange={handleCityChange}
                        />
                    <button onClick={getAcomodacoesPorCidade} >aqui</button>
                </div>


            </div>
        </>
    )
}
