import './contactoform.css'
import { Scroll } from './../../hooks/scroll'

export default function ContactoForm() {

    const { visible, ref } = Scroll(0.6)

    return (
        <div ref={ref} className={visible ? "visible formulariocontainer" : "formulariocontainer"}>
            <form className="formulariosubcontainer">
                <h3>Contactanos</h3>
                <div className="inputnombrecontainer">
                    <label htmlFor="inputnombre">Nombre y apellido</label>
                    <input id='inputnombre' type="text" />
                </div>
                <div className="inputemailcontainer">
                    <label htmlFor="inputemail">Email</label>
                    <input id='inputemail' type="email" />
                </div>
                <div className="inputdescripcioncontainer">
                    <label htmlFor="inputdescripcion">Mensaje</label>
                    <textarea id='inputdescripcion' />
                </div>
                <div className="inputsubmitcontainer">
                    <input className="inputenviarform" type="submit" value='Enviar consulta' />
                    <span>*un asesor se comunicará vía email para contestar su consulta</span>
                </div>


            </form>
        </div>
    )
}