'use client'
import axios from "axios";
import { useEffect, useState } from "react";

export default function ListProdutos() {
    const [listaProdutos, setListaProdutos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:1337/api/produtos")
            .then(function(response) {
                setListaProdutos(response.data);
            })
    }, [listaProdutos])

    return (
        listaProdutos.map((produto) => 
            <CardProduto key={produto.id} produto={prod}></CardProduto>
        )
    )
}
