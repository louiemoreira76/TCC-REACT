import './index.scss'
import { Link } from 'react-router-dom'
export default function BarraLateral(props) {

    return(
        <div id="BarraLateral">
            <div className="BarraLateral">
            <Link to="/">
                <img className='logo' src="/assets/images/GameSync/giphy-unscreen.gif" />
            </Link>
            </div>
        </div>
    )
}