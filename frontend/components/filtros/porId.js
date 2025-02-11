
import { acomodacoesPorId } from "@/services/propertyServices";
import { useState } from "react";

import {useState} from 'react'

const [id, setId] = useState("");


const handleIdChange = (e) =>{
    setId(e.target.value)
}
const getAcomodacoesPorId = async () => {

    id.toString() 
    const result = await acomodacoesPorId(id)
    console.log(result)
}


<div className="ml-40 mb-10">
<h1>todas as acomodacoes por Id</h1>
<input 
    className="border-2 mr-2" 
    type="number"
    onChange={handleIdChange}
    />
<button onClick={getAcomodacoesPorId} >aqui</button>
</div>