
import api from "./api";

export const todasAcomodacoes = async () => {

    try{

        const response = await api.get("/acomodacoes")
        
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

export const acomodacoesPorCidade = async (cidade) => {

    try{

        const response = await api.get("/acomodacoes", {
            params: {localizacao: cidade}
        })        
        
        return response.data;

    } catch(error){

        console.error("Erro ao buscar Acomodacoes em", cidade)
    }
}

export const localizacoes = async () => {

    try{
        const response = await api.get("/localizacoes")

        return response.data

    }catch(error){

    }
}