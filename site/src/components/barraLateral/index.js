import { useState, useEffect } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'


export default function BarraLateral(props) {
    const[menu, setMenu] = useState(false)
    const[carrin, setCarrin] = useState(false)
    const[fundo, setFundo] = useState(false)
    const[assis, setAssis] = useState(false)

    function Fundo() {
        if(carrin == true || menu == true || assis == true) {
            setFundo(true)
        }
        else {
            setFundo(false)
        }
    }

    useEffect( ()=> {
        Fundo()
    }, [carrin, menu, assis])

    function MostrarAssistente() {
        setAssis(!assis)
        Fundo()
    }

    function MostrarCarrin() {
        setCarrin(!carrin)
        Fundo()
    }

    function MostrarMenu() {
        setMenu(!menu)
        Fundo()
    }
    
    function Sair() {
        setCarrin(false)
        setMenu(false)
        setAssis(false)
    }

    return(
        <div id="BarraLateral">
            {fundo == true &&
            <div onClick={Sair} className='fundo'></div>}
            
            {menu == true &&
            <section className='Menu'>
                <div className='linha'></div>
                <main className='geral'>
                    <section className='pages'>
                        <h1 className='none'>Paginas</h1>
                        <div className='linha'></div>
                        <a href="http://localhost:3000/">Descobrir</a>
                        <a href="http://localhost:3000/procurar">Procurar</a>
                        <a href="http://localhost:3000/planos">Planos</a>
                        <a href="">Nuvem</a>
                        <a href="http://localhost:3000/conquistas">Sessao Conquista</a>
                        <a href="http://localhost:3000/sobregamesync">Sobre Nós</a>

                        <h1 >Menu</h1>
                        <div className='linha'></div>
                        <a href="">Configurações</a>
                        <a href="">Usuario</a>
                        <a href="">Privacidade</a>
                        <a href="">Gerenciar pagamento</a>

                        <h1 >Eu</h1>
                        <div className='linha'></div>
                        <a href="">Minha Conta</a>
                        <a href="">Favoritos</a>
                        <a href="">Compras</a>
                    </section>
                </main>
            </section>}

            {assis == true &&
            <section id='assistente'> 
                <div className='linha'></div>
                <main className='assis'>
                    <section className='assisOUbot'>
                        <button className='botao bot'>
                            Bot
                        </button>
                        <button className='botao assistente'>
                            Assistente
                        </button>
                    </section>
                    <div className='mensagens'>

                        <section className='mensagem empresa'>
                            <p>Ola, precisa de alguma ajuda? se sim, digite 1</p>
                        </section>

                    </div>
                    <nav className='enviar'>
                        <input type='text' placeholder='Qual a sua duvida?'/>
                        <button><img src="/assets/images/carrinho/enviar.png" /></button>
                    </nav>
                </main>
            </section>}


            <div className="BarraLateral">
                <img onClick={MostrarMenu} className='logo' src="/assets/images/GameSync/giphy-unscreen.gif" />
                <div className='botoes'>
                    <section onClick={MostrarAssistente} className='redirects assistente'>
                        <img src="/assets/images/carrinho/assistente.png" />
                    </section>
                    <section onClick={MostrarCarrin} className='redirects carrinho'>
                        <img src="/assets/images/carrinho/carrinho.png" />
                    </section>
                    <section className='redirects fav'>
                        <img src="/assets/images/carrinho/coracao.png" />
                    </section>
                </div>
            </div>


            {carrin == true &&
            <section className='BarraLateralCar'>
                <div className='Resumo'>
                    <h1>Resumo do Carrinho</h1>
                </div>

                <main className='prodEsub'>
                    <section className='produtos'>

                        <div className='produto'>
                            <div className='card'>
                                <div className='verproduto'>
                                    <img src="/assets/images/teste/jogo.jpg" />
                                    <button>Ver Produto</button>
                                </div>
                                <div className='info'>
                                    <h1>The Texas Chain Saw Massacre</h1>
                                    <p>O personagem Leatherface teve como inspiração o assassino serial Ed Gein, (1906-1984), que deu origem a outros vilões em outros livros e filmes, mas o caso real do assassino é bem mais monstruoso do que qualquer ficção. Sua primeira vítima foi seu irmão Henry, morto em 1944, embora nada tenha sido provado na época. No ano seguinte, a mãe dele morreu, e então Gein perdeu a razão e, eventualmente, começou a criar roupas e acessórios dos corpos de suas vítimas, das quais guardava os órgãos na sua casa.</p>
                                    <h1>R$109,90</h1>
                                </div>
                            </div>
                            <div className='acoes'>
                                <div className='buton apagar'>
                                    <img src="/assets/images/carrinho/lixeira.png" />
                                </div>
                                <div className='buton qnt'>
                                    
                                </div>
                            </div>
                        </div>

                        

                    </section>
                    <section className='subtotal'>
                        <div className='dados'>

                        </div>
                        <button>Fechar Pedido</button>
                    </section>
                </main>

                <button className='continuar'>
                    Continuar Comprando
                </button>
            </section>}
        </div>
    )
}