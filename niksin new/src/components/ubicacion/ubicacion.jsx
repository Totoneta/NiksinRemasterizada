import { useEffect, useRef, useState } from 'react';
import './ubicacion.css'

export default function Ubicacion() {
    const refImg = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (refImg.current) {
            observer.observe(refImg.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={refImg} className={visible ? "visible ubicacioncontainer" : "ubicacioncontainer"}>
            <img src="./ubicacion/ubicacionmaps.webp" alt="Ubicacion" className='ubicacionmaps' />
            <img src="./navbar/logo-b.png" alt="NIKSIN" className='logo' />
        </div>
    )
}