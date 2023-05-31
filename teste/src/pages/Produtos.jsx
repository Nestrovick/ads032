import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ProdutoContext from '../contexts/ProdutosContextx';
import './Produtos.css'


export default function Produto() {

    const { incluirProduto } = useContext(ProdutoContext)
    const navigate = useNavigate()

    function handleClick (event){
        navigate('/');
        incluirProduto()
    }

    return (
        <div onClick={handleClick}>
            <div className="card">
                <img src="./Img/" alt="Imagem do produto" />
                <div className="card-content">
                    <h2>Legenda: <span className="legenda">Processador Intel Core i3-10105F, 3.7GHz 4.4GHz Max Turbo, Cache 6MB, Quad Core, 8 Thread, LGA 1200 - BX8070110105F</span></h2>
                    <p>Preço: <span className="preco">R$ 414,99</span></p>
                    <button onClick={handleClick}>Adicionar ao carrinho</button>
                </div>
            </div>
        </div>

    )
}