import './index.scss'
import { Link } from 'react-router-dom'

export default function BarraDeCima (props) {

    return(
        <div id="BarraDeCima">
            <div className="conteudo">
                <div id="pesquisa">
                    <input type="text" placeholder="procurar na GameSync"/>
                    <p>Descobrir</p>
                    <p>Navegar</p>
                    <Link to="/planos" className='links'>Planos</Link>
                    <p>Nuvem</p>
                </div>

                <div id="perfil">
                    <p>Lista de Desejos</p>
                    <p>Carrinho</p>
                    <div className="perfil">
                        <img src="" />
                    </div>
                </div>
            </div>
        </div>
    )
}