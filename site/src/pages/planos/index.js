import './index.scss'
import { useState } from 'react'

import BarraLateral from '../../components/barraLateral'
import BarraDeCima from '../../components/baraDeCima'
import FooterPage from '../../components/footerpage/index,'

export default function Planos(){


    return(
        <div id='Plano'>
            <BarraLateral/>
            <BarraDeCima/>

            <header className='explain'>
                <section className='explain-1'>
                    
                    <article className='explain-part1'>
                        <div className='explain-1-benefis'>
                         <h1>Beneficios</h1>
                            <p>Aproveite centenas de jogos de alta qualidade e seja o primeiro a jogar novos jogos, como Starfield e SadMouse, no primeiro dia. Nao podemos esquecer do acesso aos jogos nuvem, onde voce pode jogar de qualquer lugar atraves de nosso serviço Alem do preço incrivel dos demais planos da GameMaker, voce tera acesso a um pacote imenso de recursos para ser usados na nossa engine, Vantagens e descontos de membros.</p>
                        </div>
                    </article>

                    <article className='explain-part2'>
                        <div className='explain-1-jogos'>
                            <h1>Jogos</h1>
                            <p>Tem acesso a uma biblioteca imensa de jogos para que voce jogue junto de sua familia, ou ate mesmo sozinho, temos de tudo! </p>
                        </div>

                        <div className='explain-1-engine'>
                            <h1>Engine</h1>
                         <p>Acessibilidade, prototipagem rápida, suporte multiplataforma, recursos visuais avançados e uma comunidade ativa. Permite desenvolver jogos 2D e 3D </p>
                        </div>
                    </article>
                </section>

                <section className='explain-2'>
                    <div className='explain-2-logo'>
                        <img src="assets/images/GameSync/giphy (1).gif" alt="" />
                    </div>
                </section>

                <section className='explain-3'>
                    <div className='explain-3-tools'>
                        <p>Nossa engine</p>
                    </div>
                </section>
            </header>

            <main className='planos1'>
                <aside className='planos1-title'>
                    <h1>Plano para Gamers</h1>
                </aside>

                <section className='planos1-gamers'>

                    <div className='planos1-gamers-Recursos'>
                        <h1>Recursos</h1>

                        <div className='planos1-gamers-Recursos-p'>
                        <p>Jogue uma biblioteca com mais de 100 jogos para pc</p>
                        <hr/>
                        <p>Descontos e promoções exclusivos para integrantes</p>
                        <hr/>
                        <p>Exclusivos da Game Maker no lançamento</p>
                        <hr/>
                        <p>Vantagens como, complementos, etc</p>
                        <hr/>
                        <p>Jogos da nuvem</p>
                        <hr/>
                        </div>

                    </div>

                    <div className='planos1-gamers-Diamond'>
                        <h1>Diamond</h1>

                        <div className='planos1-gamers-Recursos-g'>
                        <p>Sim</p>
                        <hr/>
                        <p>Sim</p>
                        <hr/>
                        <p>Sim</p>
                        <hr/>
                        <p>Sim</p>
                        <hr/>
                        <p>Sim</p>
                        <hr/>
                        </div>
                    
                    </div>

                    <div className='planos1-gamers-Gold'>
                        <h1>Gold</h1>

                        <div className='planos1-gamers-Recursos-o'>
                        <p>Sim</p>
                        <hr/>
                        <p>Sim</p>
                        <hr/>
                        <p>Sim</p>
                        <hr/>
                        <p>Sim</p>
                        <hr/>
                        <p>Sim</p>
                        <hr/>
                        </div>
            
                    </div>
                </section>
            </main>

            <article className='preco1'>
                    <div className='preco1-mes'>
                        <h1>Preço Mensal</h1>
                    </div>

                    <div className='preco1-acao1'>
                        <div className='preco1-acao1-first'>
                            <p><strong>R$34,99</strong></p>
                        </div>

                        <div className='preco1-acao1-second'>
                            <button>Assinar</button>
                        </div>
                    </div>

                    <div className='preco1-acao2'>
                        <div className='preco1-acao1-third'>
                            <p><strong>R$24,99</strong></p>
                        </div>

                        <div className='preco1-acao1-fourth'>
                            <button>Assinar</button>
                        </div>
                    </div>

                </article>

                <main className='planos2'>
                    <aside className='planos2-title'>
                        <h1>Plano para  Desenvolvedores</h1>
                    </aside>

                    <section className='planos2-gamers'>

                        <div className='planos2-gamers-Recursos'>
                            <h1>Recursos</h1>

                            <div className='planos2-gamers-Recursos-p'>
                            <p>Biblioteca imensa de extensões para nossa Engine</p>
                            <hr/>
                            <p>Acesso a 7 videos mostrando como usar a Engine</p>
                            <hr/>
                            <p>Jogos feitos por voce estarao na sessao “DevMaker”</p>
                            <hr/>
                            <p>Assistente que estara disponivel sempre pra você</p>
                            <hr/>
                            </div>

                        </div>

                        <div className='planos2-gamers-Programer'>
                            <h1>Programer</h1>

                            <div className='planos2-gamers-Programer-o'>
                            <p>Sim</p>
                            <hr/>
                            <p>Sim</p>
                            <hr/>
                            <p>Sim</p>
                            <hr/>
                            <p>Sim</p>
                            <hr/>
                            <div className='kkkk'></div>
                            </div>
                        </div>
                    </section>
                </main>

                <article className='preco2'>
                    <div className='preco2-mes'>
                        <h1>Preço Mensal</h1>
                    </div>

                    <div className='preco2-acao1'>
                        <div className='preco2-acao1-first'>
                            <p><strong>R$14,99</strong></p>
                        </div>

                        <div className='preco2-acao1-second'>
                            <button>Assinar</button>
                        </div>
                    </div>
                </article>

                <footer className='perguntas'>
                    <div className='perguntas-title'>
                        <h1>Perguntas frequentes</h1>
                    </div>

                    <section className='perguntas-1'>
                        <h1>O que são esses planos para pc?</h1>

                   </section>

                   <article className='perguntas-2'>
                        <h1>Como obter algum desses planos?</h1>

                   </article>

                   <section className='perguntas-3'>
                        <h1>Com que frequencia sao adicionados os jogos na biblioteca?</h1>

                   </section>

                   <article className='perguntas-4'>
                        <h1>Como saber quando um jogo irá sair do catálogo?</h1>

                   </article>
                </footer>

                <FooterPage />
        </div>
    )
}