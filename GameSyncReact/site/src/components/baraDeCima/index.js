import './index.scss'

export default function BarraDeCima (props) {

    return(
        <div id="BarraDeCima">
            <div className="conteudo">
                <div id="pesquisa">
                    <input type="text" placeholder="procurar na GameSync"/>
                    <p>Descobrir</p>
                    <p>Navegar</p>
                    <p>Planos</p>
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