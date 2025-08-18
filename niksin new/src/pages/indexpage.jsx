import PresentacionImgFondo from "../components/presentacionimgfondo/presentacionimgfondo";
import ReviewsDePersonas from "../components/reviewsdepersonas/reviewsdepersonas";
import Tarjetasx3Frase from "../components/tarjetasx3frase/tarjetasx3frase";

export default function IndexPage () {

    return (
        <section className="indexpagecontainer">
            <PresentacionImgFondo />
            <Tarjetasx3Frase />
            <ReviewsDePersonas />
        </section>
    )
}