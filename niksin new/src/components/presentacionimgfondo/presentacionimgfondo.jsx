import { Link } from 'react-router-dom'
import './presentacionimgfondo.css'

export default function PresentacionImgFondo () {

    return(
        <section className="presentacionimgfondocontainer">
            <div className="presentacionimgfondocontainertext">
                <h2>BIENVENIDO A <strong>NIKSIN</strong></h2>
                <span>El portal de compra más confiable y con la mejor joyeria del continente. Disfruta mirar nuestros catálogos pero aún más nuestras joyas diseñadas y creadas por profesionales.</span>
                <Link to='/catalogo'>Visitar Catálogo</Link>
            </div>
        </section>
    )
}