import './contactoform.css'
import { Scroll } from './../../hooks/scroll'
import toast, { Toaster } from 'react-hot-toast'

export default function ContactoForm() {

    /* Toast notificacion form */
    const notificacion = () => toast.success('Formulario enviado', {
        duration: 3000,
        position: 'top-center',
        iconTheme: {
            primary: '#ffe600',
            secondary: '#000',
        },
        style: {
            'background-color': '#000',
            'border': '1px solid #ffe600',
            'color' : '#fff'
        }
    });

    /* Formulario submit */
    const NoSubmitForm = (e) => {
        e.preventDefault()
        notificacion()
    }


    /* Scroll viewport */
    const { visible, ref } = Scroll(0.6)

    return (
        <div ref={ref} onSubmit={NoSubmitForm} id='contacto' className={visible ? "visible formulariocontainer" : "formulariocontainer"}>
            <form className="formulariosubcontainer">

                <h3>Contactanos</h3>
                <div className="inputnombrecontainer">
                    <label htmlFor="inputnombre">Nombre y apellido</label>
                    <input required id='inputnombre' type="text" />
                </div>
                <div className="inputemailcontainer">
                    <label htmlFor="inputemail">Email</label>
                    <input required id='inputemail' type="email" />
                </div>
                <div className="inputdescripcioncontainer">
                    <label htmlFor="inputdescripcion">Mensaje</label>
                    <textarea required id='inputdescripcion' />
                </div>
                <div className="inputsubmitcontainer">
                    <input className="inputenviarform" type="submit" value='Enviar consulta' />
                    <span>*un asesor se comunicará vía email para contestar su consulta</span>
                </div>

            </form>
            <Toaster />
        </div>
    )
}