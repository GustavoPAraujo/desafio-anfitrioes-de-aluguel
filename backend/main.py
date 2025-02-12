
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from backend.utils.json_db import database

import sqlite3
from sqlalchemy.orm import Session
from backend.utils.database import SessionLocal, Acomodacao


app = FastAPI(root_path="/api")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/acomodacoes")
async def acomodacoes(localizacao: str | None = None):

    conn = sqlite3.connect('teste.db')
    cursor = conn.cursor()

    if localizacao:
        cursor.execute("SELECT * FROM acomodacoes WHERE localizacao = ?", (localizacao,))
    else:
        cursor.execute("SELECT * FROM acomodacoes")

    resultado = cursor.fetchall()

    conn.close()

    if resultado:
        return resultado
    else:
        return {"message": "Nenhuma acomodação encontrada."}

@app.get("/acomodacoes/{id}")
async def get_acomodacao(id: int, db: Session = Depends(get_db)):
    
    acomodacao = db.query(Acomodacao).filter(Acomodacao.id == id).first()
    if not acomodacao:
        raise HTTPException(status_code=404, detail="Acomodação não encontrada")
    return acomodacao

@app.get("/localizacoes")
async def localizacoes():

    conn = sqlite3.connect('teste.db')
    cursor = conn.cursor()
    
    cursor.execute("SELECT DISTINCT localizacao FROM acomodacoes")
    
    cidades = cursor.fetchall()
    
    conn.close()
    
    cidades = [cidade[0] for cidade in cidades]
    
    return cidades
