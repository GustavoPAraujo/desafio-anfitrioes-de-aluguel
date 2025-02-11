
import { acomodacoesPorCidade } from "@/services/propertyServices";

import {useState} from 'react'


const [cidade, setCidade] = useState("");


const handleCityChange = (e) =>{
    setCidade(e.target.value)
}
const getAcomodacoesPorCidade = async () => {

    const cidadeFiltrada = cidade.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const result = await acomodacoesPorCidade(cidadeFiltrada)
    console.log(result)
}


<div className="ml-40 mb-10">
<h1>todas as acomodacoes por cidade</h1>
<input 
    className="border-2 mr-2" 
    type="text"
    onChange={handleCityChange}
    />
<button onClick={getAcomodacoesPorCidade} >aqui</button>
</div>