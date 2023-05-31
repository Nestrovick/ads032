import { createContext } from "react";
import { useState } from "react";

const ProdutosContext = createContext({
    meusProdutos: [],
    incluirProduto: ()=>{},
})

export function ProdutosContextProvider(props) {

    const[produtos, setProdutos] = useState([])

    function incluir(produto){
        setProdutos([...produtos, produto])
    }

    const contexto = {
        meusProdutos: produtos,
        incluirProduto: incluir,
    }
 
    return(
        <ProdutosContext.Provider value={contexto}>
            {props.children}
        </ProdutosContext.Provider>
    )
}
export default ProdutosContext