import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Produto from './pages/produto';
import Planos from './pages/planos';

export default function Routess(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Produto/>} />
                <Route path='/planos' element={<Planos/>} />
            </Routes>
        </BrowserRouter>
    )
}