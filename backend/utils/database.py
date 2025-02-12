
from sqlalchemy import Column, create_engine, column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


DATABASE_URL = "sqlite:///./teste.db"

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

SessionLocal= sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

class Acomodacao(Base):
    __tablename__ = "acomodacoes"

    id = Column(Integer, primary_key= True, index= True)
    nome = Column(String, index= True)
    imagem = Column(String)
    preco_noite = Column(Integer)
    localizacao = Column(String, index= True)

Base.metadata.create_all(bind=engine)
