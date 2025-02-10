
from fastapi import FastAPI
from utils.db import database


app = FastAPI(root_path="/api")

@app.get("/acomodacoes")
async def acomodacoes():
    return database.get("acomodacoes", [])

@app.get("/acomodacoes/{id}")
async def acomodacoes_id(id: str):

    for acomodacao in database["acomodacoes"]:
        if acomodacao["id"] == id:
            return acomodacao

@app.get("/acomodacoes/")
async def acomodacoes_cidade(localizacao: str ):

    cidade = []
    
    for acomodacao in database["acomodacoes"]:
        if acomodacao["localizacao"] == localizacao:
            cidade.append(acomodacao)

    if localizacao:
        return cidade

    return "sem acomodacaoes nessa cidade"
