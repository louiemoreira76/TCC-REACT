import { useState } from 'react'
import './index.scss'
    
export default function BarraDeCima (props) {
    const [games, setGames] = useState (false)

    return(
        <div id="BarraDeCima">
            <div className="conteudo">
                <div id="pesquisa">
                    <input onClick={()=> (setGames(true))} type="text" placeholder="procurar na GameSync"/>
                    <a href="http://localhost:3000/">Descobrir</a>
                    <a href="http://localhost:3000/procurar">Procurar</a>
                    <a href="http://localhost:3000/planos">Planos</a>
                    <a href="">Nuvem</a>
                </div>

                <div id="perfil">
                    <p>Ola, Davi Matinho</p>
                    <div className="perfil">
                        <a href="http://localhost:3000/perfil"><img src="/assets/images/GameSync/user.png" /></a>
                    </div>
                </div>
            </div>

            
            {games == true &&
            <section id='produtos'>
                <div className="conteudo">
                    <div id="pesquisa">
                        <button onClick={() => (setGames(false))}>Voltar</button>
                        <input type="text" placeholder="procurar na GameSync"/>
                        <a href="http://localhost:3000/">Descobrir</a>
                        <a href="http://localhost:3000/procurar">Procurar</a>
                        <a href="http://localhost:3000/planos">Planos</a>
                        <a href="">Nuvem</a>
                    </div>

                    <div id="perfil">
                        <p>Ola, Davi Matinho</p>
                        <div className="perfil">
                            <a href="http://localhost:3000/perfil"><img src="/assets/images/GameSync/user.png" /></a>
                        </div>
                    </div>
                </div>

                <section className='produtos'>

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

                <section className='produto'>
                    <div className='imagem-produto'>
                        <div className='sombra'>
                            <div className='linha'></div>
                        </div>
                        <div className='produtoIMG'>
                            <img src="/assets/images/teste/uau.jpg" />
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

                <section className='produto'>
                    <div className='imagem-produto'>
                        <div className='sombra'>
                            <div className='linha'></div>
                        </div>
                        <div className='produtoIMG'>
                            <img src="/assets/images/teste/futzada.webp" />
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

                <section className='produto'>
                    <div className='imagem-produto'>
                        <div className='sombra'>
                            <div className='linha'></div>
                        </div>
                        <div className='produtoIMG'>
                            <img src="/assets/images/teste/starfield.jpg" />
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

                <section className='produto'>
                    <div className='imagem-produto'>
                        <div className='sombra'>
                            <div className='linha'></div>
                        </div>
                        <div className='produtoIMG'>
                            <img src="/assets/images/teste/dead-by-daylight.jpg" />
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

                </section>         
                    
            </section>}

        </div>
    )
}