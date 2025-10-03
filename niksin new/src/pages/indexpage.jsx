import ContactoForm from "../components/contactoform/contactoform";
import PresentacionImgFondo from "../components/presentacionimgfondo/presentacionimgfondo";
import ReviewsDePersonas from "../components/reviewsdepersonas/reviewsdepersonas";
import ScrollTiempoHorarios from "../components/scrolltiempohorarios/scrolltiempohorarios";
import Tarjetasx3Frase from "../components/tarjetasx3frase/tarjetasx3frase";
import Ubicacion from "../components/ubicacion/ubicacion";

import './indexpage.css'

export default function IndexPage () {

    return (
        <section className="indexpagecontainer">
            <PresentacionImgFondo />
            <Tarjetasx3Frase />
            <ScrollTiempoHorarios />
            <Ubicacion />
            <ReviewsDePersonas />
            <ContactoForm />
        </section>
    )
}