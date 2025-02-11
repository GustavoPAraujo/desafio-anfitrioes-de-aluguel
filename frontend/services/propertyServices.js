
import api from "./api";


export const acomodacoes = async () => {

    try{

        const response = await api.get("/acomodacoes")
        console.log(response)

        return response.data;

    } catch(error){

        console.error("Erro  as buscar Acomodacoes", error)

    }
}

export const acomodacoesPorId = async (id) => {

    try{

        const response = await api.get(`/acomodacoes/${id}`, id)

        return response.data;

    } catch(error){

        console.error("Erro  as buscar Acomodacoes", error)
    }
}


export const acomodacoesPorCidade = async (data) => {

    try{

        const response = await api.get("/acomodacoes/", data)
        console.log("response",response)

        return response.data;

    } catch(error){

        console.error("Erro  as buscar Acomodacoes", error)

    }
}

