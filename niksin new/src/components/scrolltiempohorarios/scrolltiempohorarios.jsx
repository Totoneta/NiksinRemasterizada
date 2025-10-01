import './scrolltiempohorarios.css'
import { Scroll } from '../../hooks/scroll'

export default function ScrollTiempoHorarios () {

  const  { visible, ref } = Scroll(0.6)

    return(
        <section className={visible ? "visible scrollcontainer" : "scrollcontainer"} ref={ref}>
            <div className="scrollcardcontainer">
                <img src="./Scroll/tienda.png" alt="Ubicación" />
                <h3>Sucursales</h3>
                <span>Pepito Dominges 1444, Rosario, Santa Fe, Argentina</span>
            </div>
            <div className="scrollcardcontainer">
                <img src="./Scroll/calendario.png" alt="Horarios" />
                <h3>Horarios</h3>
                <span>De Lun a Vie, de 8:00 AM hasta 16:00 PM</span>
            </div>
            <div className="scrollcardcontainer">
                <img src="./Scroll/collar.png" alt="Descripción" />
                <h3>Líderes</h3>
                <span>En compras y ventas de oro, alhajas y antiguedades</span>
            </div>
        </section>
    )
}