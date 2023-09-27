import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Produto from './pages/web/produto';
import Planos from './pages/web/planos';
import Conquistas from './pages/web/conquistas';
import MudarPerfil from './pages/web/changes';
import Navegar from './pages/web/navegar';

import GameSync from './pages/web/GameSync';
import Descobrir from './pages/web/descobrir';

import CadastroAdmin from './pages/admin/login_admin'


export default function Routess(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Descobrir/>} />
                <Route path="/produto" element={<Produto/>} />
                <Route path='/planos' element={<Planos/>} />
                <Route path='/conquistas' element={<Conquistas/>} />
                <Route path='/perfil' element={<MudarPerfil/>} />
                <Route path='/procurar' element={<Navegar/>} />
                <Route path='/sobregamesync' element={<GameSync/>} />

                <Route path='/admin' element={<CadastroAdmin/>} />
            </Routes>
        </BrowserRouter>
    )
}