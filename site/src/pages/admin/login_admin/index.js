import './index.scss'
import { useState } from 'react'

export default function CadastroAdmin(){


    return(
        <div id='mae'>
            <figure className='mae-formulario'>
                <div className='n-creio'>
                    <span className='borda2'></span>
                <form>
                    <h1>Login Admin</h1>
                    <div className='formulario'>
                        <input type="text" required="required"/>
                        <span>Email</span>
                        <i></i>
                    </div>

                    <div className='formulario'>
                        <input type="password" required="required"/>
                        <span>Senha</span>
                        <i></i>
                    </div>

                    <div className='formulario'>
                        <input type="number" required="required"/>
                        <span>Codigo</span>
                        <i></i>
                    </div>

                    <div className="botao">
                        <button>Entrar</button>
                    </div>
                </form>
                </div>
            </figure>
        </div>
    )
}