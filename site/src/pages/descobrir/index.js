import './index.scss'

import BarraLateral from '../../components/barraLateral'
import BarraDeCima from '../../components/baraDeCima'
import FooterPage from '../../components/footerpage/index,'
import { useState, useEffect } from 'react'

export default function Descobrir () {
    const [estadoN, setEstadoN] = useState (1)
    const [tempo, setTempo] = useState (15)

    function espera (ms) {
        return new Promise ( resolve => {
            setTimeout(() => {resolve('')}, ms);
        })
    } 

    async function Timer (){

        for (let i = 15; i >= 1; i--){
            await espera(1000);
            setTempo(i);

            if(i == 1) {
                setEstadoN(estadoN + 1)
                Timer()
            }
        }
    }

    useEffect(() =>{
        Timer()
    }, [])

    return (
        <div className='Descobrir'>
            <BarraDeCima/>
            <BarraLateral/>

            <div id='novidade'>
                <section id='Descobrir'>
                    <img src="/assets/images/teste/starfield.jpg" />

                    <section className='info-descobrir'>

                        <div className='info'>
                            <h1>{tempo} Starfield</h1>
                            <p>2042 takes place two decades after the events of the War of 2020. Extreme climate change events take place during the 2030s, causing massive global upheaval.</p>
                        </div>

                        <div className='estado'>
                            <p>{estadoN}/3</p>
                        </div>

                    </section>

                    <div className='carregamento'>
                        <div className='carregando'></div>
                    </div>
                </section>

                <nav id='noticias'>
                    <div className='noticias'>

                        <main className='noticia'>
                            <div className='imagem'>
                                <img src="/assets/images/teste/noticia1.webp" />
                            </div>
                            <div className='conteudo'>
                                <section className="materia">
                                    <h1>Veja 7 curiosidades de Goro de Mortal Kombat</h1>
                                    <p>Um dos grandes diferenciais de Mortal Kombat é o fato de apresentar lutadores que não são totalmente humanos, criando situações que podem parecer até desiguais. E no primeiro game, um dos inimigos que muitos temiam era Goro, o guerreiro de quatro braços.

                                    Goro não apareceu em muitos games da franquia se comparado a nomes como Liu Kang, Sub-Zero e Scorpion, mas certamente é um personagem bastante lembrado por diversos jogadores. Por isso, trazemos a seguir algumas curiosidades referentes ao representante da Exoterra.</p>
                                </section>

                                <section className='compartilhar'>
                                    <button className='c'>Compartilhar</button>
                                    <button><img src="/assets/images/carrinho/salvar.png" /></button>
                                    <button><img src="/assets/images/carrinho/coracao.png" /></button>
                                </section>
                            </div>
                        </main>
                        <main className='noticia'>
                        <div className='imagem'>
                                <img src="/assets/images/teste/noticia2.webp" />
                            </div>
                            <div className='conteudo'>
                                <div className='materia'>
                                    <h1>Quanto tempo leva para zerar Mortal Kombat 1?</h1>
                                    <p>Com uma série de recursos e uma lista de personagens icônicos, o novo Mortal Kombat já ocupou seu lugar como um dos melhores jogos de luta do ano ao lado de Street Fighter 6. Se você ainda não teve a oportunidade de jogá-lo, mas quer saber quanto tempo demora para zerar o Mortal Kombat 1, então veio ao lugar certo!A conclusão da campanha de Mortal Kombat 1 leva em torno de seis horas de gameplay. Considerando que você, por exemplo, possa jogar apenas duas horas diárias, levará três dias para terminar o modo história. Caso queira completar todas as missões secundárias, que também incluem a Torre dos Desafios e o Modo Invasão, a jogatina de 14 horas pode levar cerca de uma semana.</p>
                                </div>

                                <section className='compartilhar'>
                                    <button className='c'>Compartilhar</button>
                                    <button><img src="/assets/images/carrinho/salvar.png" /></button>
                                    <button><img src="/assets/images/carrinho/coracao.png" /></button>
                                </section>
                            </div>
                        </main>
                        <main className='noticia'>
                        <div className='imagem'>
                                <img src="/assets/images/teste/noticia3.webp" />
                            </div>
                            <div className='conteudo'>
                                <div className='materia'>
                                    <h1>Nintendo 64: confira os 10 jogos mais emulados do console</h1>
                                    <p>O Nintendo 64 foi o terceiro console de mesa da Nintendo! Nele tivemos a chance de ver clássicos nascerem e franquias famosas da empresa ganhando ainda mais notoriedade. Ao longo do seu ciclo de vida foram centenas de games lançados — sendo que alguns ainda são jogados até hoje por meio de emuladores!

                                    Caso esteja curioso, listaremos abaixo quais são os 10 games de Nintendo 64 mais baixados para emulação. Será que o seu favorito está presente nessa lista? Confira!</p>
                                </div>

                                <section className='compartilhar'>
                                    <button className='c'>Compartilhar</button>
                                    <button><img src="/assets/images/carrinho/salvar.png" /></button>
                                    <button><img src="/assets/images/carrinho/coracao.png" /></button>
                                </section>
                            </div>
                        </main>

                    </div>

                    <button>Ver mais noticias</button>
                </nav>
            </div>






            {/*
            <section id='marcas'>
                <div className='card'>
                    
                </div>
                <div className='card'>
                    
                </div>
                <div className='card'>
                     
                </div>
                <div className='card'>
                    
                </div>
                <div className='card'>
                    
                </div>
                <div className='card'>
                    
                </div>
                <div className='card'>
                    
                </div>
                <div className='card'>
                    
                </div>
                <div className='card'>
                    
                </div>
            </section>
            */}





            <section id='titles'>
                <h1 className='tinf'>Os mais jogados</h1>
                <div className='temas'>
                    <p>Games</p>
                    <p>Novos</p>
                    <p>Bombando</p>
                </div>
            </section>


            <div id="produtos">  
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
            </div>







            <section id='titles'>
                <h1 className='t2'>Promoção GameSync!</h1>
                <div className='temas'>
                    <p>Games</p>
                    <p>Novos</p>
                    <p>Bombando</p>
                    <p>PromoG</p>
                </div>
            </section>

            <section id='produtos-02'>
                <main className='produto-02'>
                    <img src="/assets/images/teste/games/elder.jpg" />
                    <section className='informacoes-p-02'>
                        <h1>Elder Ring</h1>
                        <p>Muito da história de Elden Ring é relacionada com a Rainha Marika, a Eterna. Não se sabe muito sobre suas origens, mas ela é de uma raça conhecida como Numem. Os Numem vêm de fora das Terras Intermédias, são descendentes de habitantes de outro mundo e, embora sejam raros, tem uma vida longa.</p>
                    </section>
                </main>

                <main className='produto-02'>
                    <img src="/assets/images/teste/jogo.jpg" />
                    <section className='informacoes-p-02'>
                        <h1>The Texas Chain Saw Massacre</h1>
                        <p>O personagem Leatherface teve como inspiração o assassino serial Ed Gein, (1906-1984), que deu origem a outros vilões em outros livros e filmes, mas o caso real do assassino é bem mais monstruoso do que qualquer ficção. Sua primeira vítima foi seu irmão Henry, morto em 1944, embora nada tenha sido provado na época. No ano seguinte, a mãe dele morreu, e então Gein perdeu a razão e, eventualmente, começou a criar roupas e acessórios dos corpos de suas vítimas, das quais guardava os órgãos na sua casa.</p>
                    </section>
                </main>
            </section>




            <section id='descobrir3'>   
                <div className='card'>
                    <img src="/assets/images/teste/uau.jpg" />

                    <section className='info-descobrir'>
                        <h1>Chega em 21/03</h1>
                    </section>
                </div>
                <div className='card'>
                    <img src="/assets/images/teste/village.jpg" />

                    <section className='info-descobrir'>
                        <h1>Chega em 01/04</h1>
                    </section>
                </div>
                <div className='card'>
                    <img src="/assets/images/teste/futzada.webp" />

                    <section className='info-descobrir'>
                        <h1>Chega em 08/04</h1>
                    </section>
                </div>
            </section>




            <section id='titles'>
                <h1 className='tinf'>Os mais jogados</h1>
                <div className='temas'>
                    <p>Games</p>
                    <p>Novos</p>
                    <p>Bombando</p>
                </div>
            </section>


            <div id="produtos">  
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
            </div>

            


            <FooterPage/>
        </div>
    )
}