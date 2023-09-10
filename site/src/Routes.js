import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Produto from './pages/produto';
import Planos from './pages/planos';
import Conquistas from './pages/conquistas';

export default function Routess(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Produto/>} />
                <Route path='/planos' element={<Planos/>} />
                <Route path='/conquistas' element={<Conquistas/>} />
            </Routes>
        </BrowserRouter>
    )
}