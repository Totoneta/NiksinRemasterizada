import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {

    return (
        <nav className="navbarcontainer">
            <Link to='/'><img src="/navbar/logo-b.png" alt="NIKSIN" /></Link>
            <ul className="navbarcontainerlist">
                <li className="navbarcontaineritem"><Link to='/'>Inicio</Link></li>
                <li className="navbarcontaineritem"><Link id='oro' to='/catalogo'>Catálogo</Link></li>
                <li className="navbarcontaineritem"><Link to='/contacto'>Contacto</Link></li>
            </ul>
        </nav>
    )
}