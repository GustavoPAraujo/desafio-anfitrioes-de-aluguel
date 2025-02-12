'use client'

export default function SearchBar({openModal}) {


    return (
        <>
            <div className="flex flex-col items-center">
                <button 
                    className="h-[40px] min-w-[150px] xs:w-[300px] sm:w-[400px] md:w-[500px]
                               border-2 rounded-[100px] hover:bg-slate-50"
                    onClick={openModal}
                >
                    Localização
                </button>
            </div>

        </>
    );
}
