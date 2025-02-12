from database import SessionLocal, Acomodacao

acomodacoes = [
    Acomodacao(id="1", nome="Apartamento Beiramar", imagem="https://imgs.kenlo.io/VWRCUkQ2Tnp3d1BJRDBJVe1szkhnWr9UfpZS9ftWwjXgr7v5Znen3XVcMHllDVRJJeIbi3YwVYEtu11l041A3hVlvehIUri-kje4x7S93POdglWG0pX-v4zxzdunBPnCmZ1j2IPwTAOK6I5fYd0dLEFJd8NTXR3se4e-IkcNuyfTtGGVT7l5R2pXgA4ZsyhTlEOrUMOI7Ecb3xqDTv2AhjagFLz9B2NbCrMNAdIz7EIJ8RC9W0J8p0oF7Jq1qTLdaOenJpi9yWxNWAZ8vJq+TqjzwtiOK59nSeUyO3cb51URUaJf1-aKA+9jrwcLou-TCwSW3hrDkec3f8vtBcFNmqoEkRDAGuQbv03pxIaW0aD+aRmHNQA69e7M--riOv6mHq32IiWPgYoC5aL8KvV3MJKpMkRXU2V+LA0-5Bf7hc2a7RK6LCqU8xBJWEGSn45y9CcwYAQDspFO7S6qi4c=.jpg", preco_noite="500", localizacao="Florianópolis"),
    Acomodacao(id="2", nome="Casa Praia Prava", imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ohBnzhHD7jxxeMgLZOj9Hkb84cJCqKJ9-Q&s", preco_noite="440", localizacao="Florianópolis"),
    Acomodacao(id="3", nome="Casa na Lagoa da Conceição", imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9fK47xmsOUvZRdSn1wzWIsGDFmlbuUYW2w&s", preco_noite="300", localizacao="Florianópolis"),
    Acomodacao(id="4", nome="Apartamento Pedra Branca", imagem="https://img.nsctotal.com.br/wp-content/uploads/2023/07/CidadePedraBrancaPatiodasArtesDiv-800x531.jpg", preco_noite="350", localizacao="Palhoça"),
    Acomodacao(id="5", nome="Apartamento São José", imagem="https://resizedimgs.vivareal.com/crop/614x297/named.images.sp/1425ef3b78ce902bf2fd88bcaeedad09/dvert-residence-club-no-praia-comprida-sao-jose.webp", preco_noite="200", localizacao="São José"),
    Acomodacao(id="6", nome="Cobretura em Balneário", imagem="https://cf.bstatic.com/xdata/images/hotel/max1024x768/336248492.jpg?k=4ac5160ce2f1c7fed9ea1a2b68a8f4ca5aff810ae8ccbad7523231a884556f76&o=&hp=1", preco_noite="700", localizacao="Balneário Camboriú"),
    Acomodacao(id="7", nome="Apartamento Avenida Atlântica", imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWxr_zsxFrpPMwE3bdCAcHrNnKQG8Y1nrzkg&s", preco_noite="800", localizacao="Balneário Camboriú"),
]

db = SessionLocal()

db.add_all(acomodacoes)
db.query(Acomodacao).delete() 
db.commit()

db.close()
