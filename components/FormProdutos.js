'use client';

import axios from "axios";
import { useState } from "react";

export default function FormProdutos() {
    const [nome,setNome] = useState("");
    const [preco,setPreco] = useState(0);

    const cadastrarProduto = event => {
        event.preventDefault();

        axios.post("http://localhost:4200/produtos", {
            nome: nome,
            preco: preco
        }).then((response) => { 
            alert("Produto "+response.data.id+ " cadastrado com sucesso!");
            setNome(""); 
            setPreco(0);
    
        }).catch(err => console.log(err))

    }

    return(
        <form onSubmit={cadastrarProduto}>
            <label for="nome">Nome:</label>
            <input type="text" name="nome"
            value={nome}
            onChange={(ev) => setNome(ev.target.value)}>                
            </input>
            <br />
            <label for="preco">Preço:</label>
            <input type="number" name="preco"
            value={preco}
            onChange={(ev) => setPreco(ev.target.value)}>                
            </input>
            <br />
            <input type="submit"></input>
        </form>
    )
}