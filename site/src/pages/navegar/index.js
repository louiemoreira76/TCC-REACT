import './index.scss'
import axios from 'axios'

import BarraLateral from '../../components/barraLateral'
import BarraDeCima from '../../components/baraDeCima'
import FooterPage from '../../components/footerpage/index,'
import Produto from '../../components/produto'

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Navegar() {
    const [tjogos, setTjogos] = useState ([])

    async function TodosJogos() {
        let url = 'https://api.rawg.io/api/games?key=0a526d3c3985430c9469d8d6951eb5cb'  

        Response = await axios.get(url)
        setTjogos(Response.results)
    }



    
    return(
        <div className='Navegar'>
            <BarraDeCima/>
            <BarraLateral/>

            <section id='Navegar'> 
                
                <section className='card-promo'>
                    <div className='sombra'>
                        
                    </div>
                    <div className='noticia'>
                        <img src="/assets/images/teste/starfield.jpg" />
                    </div>
                </section>
                <section className='card-promo'>
                    <div className='sombra'>
                        
                    </div>
                    <div className='noticia'>
                        <img src="/assets/images/teste/uau.jpg" />
                    </div>
                </section>
                <section className='card-promo'>
                    <div className='sombra'>
                        
                    </div>
                    <div className='noticia'>
                        <img src="/assets/images/teste/village.jpg" />
                    </div>
                </section>
                <section className='card-promo'>
                    <div className='sombra'>
                        
                    </div>
                    <div className='noticia'>
                        <img src="/assets/images/teste/starfield.jpg" />
                    </div>
                </section>
                <section className='card-promo'>
                    <div className='sombra'>
                        
                    </div>
                    <div className='noticia'>
                        <img src="/assets/images/teste/starfield.jpg" />
                    </div>
                </section>
                

            </section>

            <article className='procurar'>
                <div onClick={TodosJogos} className='procura M'>
                    <p>Mostrar</p>
                </div>
                <div className='procura N'>
                    <a href="">Novidades</a>
                </div>
                <div className='procura D'>
                    <a href="">DevGames</a>
                </div>
                <div className='procura S'>
                    <a href="http://localhost:3000/conquistas">Sessao Conquista</a>
                </div>
                <div className='procura P'>
                    <p>Promoções</p>
                </div>
                <div className='filtrart'>
                    <p>Filtros</p>
                </div>
            </article>

            <div id="produtos"> 

                <section className='produto'>
                    <div className='imagem-produto'>
                        <div className='sombra'>
                            <div className='linha'></div>
                        </div>
                        <div className='produtoIMG'>
                            <img src="" />
                        </div>
                    </div>
                    <div className='informacoes'>
                        <div className='dados'>
                            <a href=""></a>
                            <p>Sumo Nottingham</p>
                        </div>
                        <div className='info'>
                            <h3>Novidade</h3>
                        </div>
                    </div>
                </section>

            </div>

           

            <FooterPage/>
        </div>
    )
}