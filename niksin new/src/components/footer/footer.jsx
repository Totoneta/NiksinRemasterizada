import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {

    return (
        <footer className='footercontainer' >
            <ul className="navbarfootercontainer">
                <li className="navbarfooteritem"><Link to='/'>Inicio</Link></li>
                <li className="navbarfooteritem"><Link to='/catalogo'>Catálogo</Link></li>
                <li className="navbarfooteritem"><a href='#contacto'>Contacto</a></li>
            </ul>
            <span>©NIKSIN</span>
            <a href='#navbar' ><img src="/logo-b.png" alt="NIKSIN" /></a>
        </footer>
    )
}