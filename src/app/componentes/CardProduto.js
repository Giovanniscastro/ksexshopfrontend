'use client'
import 'w3-css/3/w3.css'
export default function CardProduto ({produto}){
    return (
        <div className="w3-col l4 m6 s12 w3-container w3-padding-16">
            <div className="w3-card">
                <div className="w3-container w3-center">
                    {/* <img src={produto.imagem} style={{width: "70%"}}/> */}
                    <h5>{produto.attributes.Name}</h5>
                    <h3 className="w3-blue">
                        ${produto.attributes.Preco.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}
                    </h3>
                </div>
            </div>
        </div>
    )
}