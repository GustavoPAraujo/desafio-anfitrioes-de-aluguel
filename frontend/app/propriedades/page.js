'use client'

import { acomodacoes, acomodacoesPorId, acomodacoesPorCidade } from "@/services/propertyServices"

export default function Propriedades(){

    const handleAcomodacoes = async () => {

        const result = await acomodacoes()
        console.log(result)
    }

    return(
        <>
            <div className="flex flex-row">

                <div>
                    <h1>todas as acomodacoes</h1>
                    <button onClick={handleAcomodacoes}>aqui</button>

                </div>

                <div></div>

                <div></div>

            </div>
        </>
    )
}
