import './index.scss'

import axios from 'axios'

export default function Produto(props) {

    return(
        <section className='produto'>
            <div className='imagem-produto'>
                <div className='sombra'>
                    <div className='linha'></div>
                </div>
                <div className='produtoIMG'>
                    <img src="/assets/images/teste/jogo.jpg" />
                </div>
            </div>
            <div className='informacoes'>
                <div className='dados'>
                    <a href="http://localhost:3000/produto">The Texas Chain Saw Massacre</a>
                    <p>Sumo Nottingham</p>
                </div>
                <div className='info'>
                    <h3>Novidade</h3>
                </div>
            </div>
        </section>
    )
}