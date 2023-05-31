import { useContext } from "react"
import ProdutosContext from '../contexts/ProdutosContextx';

export default function Home() {

    const { meusProdutos } = useContext(ProdutosContext);

    return (
        <div>
            <h2>Meus Contatos</h2>
        </div>
    )
}