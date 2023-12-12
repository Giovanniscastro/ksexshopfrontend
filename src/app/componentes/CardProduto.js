"use client";
import { useState } from "react";
import "w3-css/3/w3.css";
import Modal from "./modal";

export default function CardProduto({ produto }) {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const url = "http://localhost:1337".concat(
        produto.attributes.fotos.data[0].attributes.formats.thumbnail.url
    );

  return (
    <div className="w3-col l4 m6 s12 w3-container w3-padding-16">
      <div className="w3-card">
        <div className="w3-container w3-center">
          <img src={url} style={{ width: "20%" }} />
          <h5>{produto.attributes.Name}</h5>
          <h3 className="w3-blue">
            {produto.attributes.Preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>

          <button onClick={() => setModalOpen(true)}>Ver Detalhes</button>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <h2>{produto.attributes.Name}</h2>
                <img id="imgmodal" src={url} style={{ width: "20%" }} />
                <h2>R${produto.attributes.Preco}</h2>
                <h3>Descrição</h3>
                <p>{produto.attributes.Descricao}</p>
            </Modal>
        </div>
      </div>
    </div>
  );
}
