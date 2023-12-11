'use client'
import 'w3-css/3/w3.css'
export default function CardProduto ({produto}){
    const openModal = (produto) => {
        setSelectedProduto(produto);
      };
    
      const closeModal = () => {
        setSelectedProduto(null);
      };
    const url ='http://localhost:1337'.concat (produto.attributes.fotos.data[0].attributes.formats.thumbnail.url);
    return (
        <div className="w3-col l4 m6 s12 w3-container w3-padding-16">
            <div className="w3-card">
                <div className="w3-container w3-center">
                    <img src={url} style={{width: "20%"}}/>
                    <h5>{produto.attributes.Name}</h5>
                    <h3 className="w3-blue">
                        {produto.attributes.Preco.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}
                    </h3>
                    <button onClick={() => openModal(produto)}>Ver detalhes</button>
                    {setSelectedProduto && (
                    <Modal produto={setSelectedProduto} onClose={closeModal} />
                    )}
                </div>
            </div>
        </div>
    )
}
