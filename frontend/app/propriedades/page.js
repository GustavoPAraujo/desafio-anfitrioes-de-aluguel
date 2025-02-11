'use client'

import { acomodacoes, acomodacoesPorId, acomodacoesPorCidade } from "@/services/propertyServices"

import { useState } from "react";

export default function Propriedades(){
    const [id, setId] = useState("");


    const handleAcomodacoes = async () => {
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
     


    const handleAcomodacoesPorCidade = async (cidade) => {
        const result = await acomodacoesPorCidade(cidade)
        console.log(result)
    }

    return(
        <>
            <div className="flex flex-col">

                <div className="ml-40 mb-10">
                    <h1>todas as acomodacoes</h1>
                    <button onClick={handleAcomodacoes}>aqui</button>

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


            </div>
        </>
    )
}
