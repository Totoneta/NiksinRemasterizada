import { useState } from 'react';
import './tarjetasx3frase.css';

export default function Tarjetasx3Frase() {
    const [animacion1, setAnimacion1] = useState(false);
    const [animacion2, setAnimacion2] = useState(false);

    /* Animation Small Cards */
    const IniciarAnimacion1 = () => {
        if (!animacion1) {
            setAnimacion1(true);
        }
    };
    const FinalizarAnimacion1 = () => {
        setAnimacion1(false)
    }
    const IniciarAnimacion2 = () => {
        if (!animacion2) {
            setAnimacion2(true);
        }
    };
    const FinalizarAnimacion2 = () => {
        setAnimacion2(false)
    }

    /* Animation Big Card */
    const [animacionbig, setAnimacionbig] = useState(false);
    const IniciarAnimacionBig = () => {
        if(!animacionbig) {
            setAnimacionbig(true)
        }
    };
    const FinalizarAnimacionBig = () => {
        setAnimacionbig(false)
    };

    return (
        <aside className="tarjetasx3frasecontainer">
            <div className="tarjetasx3frasecontainerimg">
                <div className="tarjetasx3frasecontainerimglittle">
                    <div>
                        <img src="/tarjetasx3frase/collaruno.jpg"
                            className={animacion1 ? 'rotacionvertical' : ''}
                            onMouseEnter={IniciarAnimacion1}
                            onTouchStart={IniciarAnimacion1}
                            onAnimationEnd={FinalizarAnimacion1}
                            alt=""
                        />
                    </div>
                    <div>
                        <img src="/tarjetasx3frase/collardos.jpg"
                            className={animacion2 ? 'rotacionvertical' : ''}
                            onMouseEnter={IniciarAnimacion2}
                            onTouchStart={IniciarAnimacion2}
                            onAnimationEnd={FinalizarAnimacion2}
                            alt=""
                        />
                    </div>
                </div>
                <div>
                    <img src="/tarjetasx3frase/relojuno.jpg"
                        className={animacionbig ? 'rotacionhorizontal' : ''}
                        onMouseEnter={IniciarAnimacionBig}
                        onTouchStart={IniciarAnimacionBig}
                        onAnimationEnd={FinalizarAnimacionBig}
                    alt="" 
                    />
                </div>
            </div>
            <div className="tarjetasx3frasecontainertexto">
                <span>Nuestra joyería es hecha 100% por artesanos</span>
                <h4>SI TIENES QUE ELEGÍR <br />¿PORQUÉ NO ASEGURARSE CON <strong>NIKSIN</strong>?</h4>
            </div>
        </aside>
    )
}