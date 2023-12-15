'use client'
import axios from "axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CardProduto from "./CardProduto";

export default function ListProdutos() {
    const searchParams = useSearchParams();
    const [listaProdutos, setListaProdutos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:1337/api/produtos/?populate=*")
            .then(function(response) { 
                const category = searchParams.get('categoryId')
                const produtos = response.data.data

                if(category) {
                    const filtered = produtos.filter(produto => {
                        return produto.attributes.category.data && produto.attributes.category.data.id === parseInt(category)
                    })
                    return setListaProdutos(filtered);
                }

                return setListaProdutos(produtos);
            })
    }, [searchParams.get('categoryId')])
    return(
    <>
        { listaProdutos?.length === 0 && <h2 id="not"> Sem produtos cadastrados para essa categoria </h2> }
        {listaProdutos.map((prod) => 
            <CardProduto key={prod.id} produto={prod}></CardProduto>
            
        )}
     </>
)
}
