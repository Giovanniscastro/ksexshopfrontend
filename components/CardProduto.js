
export default function CardProduto ({produto}){
    return (
        <div className="w3-col l4 m6 s12 w3-container w3-padding-16">
            <div className="w3-card">
                <div className="w3-container w3-center">
                    <img src={produtos.imagem} style={{width: "70%"}}/>
                    <h5>{produtos.nome}</h5>
                    <h3 className="w3-blue">
                        ${produtos.preco.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}
                    </h3>
                </div>
            </div>
        </div>
    )
}