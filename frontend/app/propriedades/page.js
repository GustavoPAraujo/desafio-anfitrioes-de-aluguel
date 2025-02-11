'use client'


import { localizacoes } from "@/services/propertyServices";

export default function Propriedades() {


    const handleOpenLocation = async () => {

        try{

            const result = await localizacoes()
            console.log(result)

        }catch(error){

        }

    }

    return (
        <>
            <div className="flex flex-col items-center">

                <div className="flex flex-col items-center">
                                    
                        <button className=" h-[40px] w-full xs:w-[100px] sm:w-[200px] md:w-[300px] lg:w-[400px] 
                                            border-2 rounded-[100px] hover:bg-slate-50"
                                onClick={handleOpenLocation}>
                            Localização
                        </button>
                </div>



            </div>
        </>
    )
}
