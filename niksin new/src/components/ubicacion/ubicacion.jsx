import './ubicacion.css'
import { Scroll } from '../../hooks/scroll';

export default function Ubicacion() {
    
    const { visible, ref } = Scroll(0.6)

    return (
        <div ref={ref} className={visible ? "visible ubicacioncontainer" : "ubicacioncontainer"}>
            <img src="./ubicacion/ubicacionmaps.webp" alt="Ubicacion" className='ubicacionmaps' />
            <img src="./logo-b.png" alt="NIKSIN" className='logo' />
        </div>
    )
}