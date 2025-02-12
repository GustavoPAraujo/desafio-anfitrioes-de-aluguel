
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from utils.db import database


app = FastAPI(root_path="/api")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/acomodacoes")
async def acomodacoes(localizacao: str | None = None):
    if localizacao:
        cidade = []
        for acomodacao in database["acomodacoes"]:
            if acomodacao["localizacao"].lower() == localizacao.lower():
                cidade.append(acomodacao)
                
        if cidade:
            return cidade

    return database.get("acomodacoes", [])

@app.get("/acomodacoes/{id}")
async def acomodacoes_id(id: str):

    for acomodacao in database["acomodacoes"]:
        if acomodacao["id"] == id:
            return acomodacao

@app.get("/localizacoes")
async def localizacoes():

    cidades = set()

    for acomodacao in database["acomodacoes"]:
        cidades.add(acomodacao["localizacao"])

    return list(cidades)
