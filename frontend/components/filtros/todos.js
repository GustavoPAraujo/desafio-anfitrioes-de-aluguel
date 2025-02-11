
import { acomodacoes } from "@/services/propertyServices";


const getAcomodacoes = async () => {
    const result = await acomodacoes()
    console.log(result)
}