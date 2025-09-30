import { useEffect, useRef, useState } from 'react';
import './reviewsdepersonas.css'

export default function ReviewsDePersonas() {
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
        <section className={visible ? 'visible reviewsdepersonascontainer' : 'reviewsdepersonascontainer'} ref={refImg}>
            <h3></h3>
            <ul className="reviewsdepersonassubcontainer">
                <li className="reviewsdepersonassubcontaineritem">
                    <img src="/reviewsdepersonas/juan.jpg" alt="Juan" />
                    <h4>Juan Nito - 2024</h4>
                    <p>Estoy enamorado de mi nuevo reloj. No solo es elegante y sofisticado, sino que también es muy cómodo. El diseño minimalista combina con cualquier atuendo, y la durabilidad parece excelente. <strong>Lo recomiendo al 100%</strong>, tanto para ocasiones formales como para el día a día.</p>
                </li>
                <li className="reviewsdepersonassubcontaineritem">
                    <img src="/reviewsdepersonas/luisa.jpg" alt="Luisa" />
                    <h4>Luisa Lamiel - 2024</h4>
                    <p>Me encantó el collar que compré, es exactamente lo que buscaba. Su diseño elegante y moderno lo hace perfecto tanto <strong>para el día a día como para ocasiones especiales.</strong> La calidad es impresionante y brilla de una manera sutil pero destacada. Definitivamente, es mi nueva pieza favorita</p>
                </li>
                <li className="reviewsdepersonassubcontaineritem">
                    <img src="/reviewsdepersonas/pepe.jpg" alt="Pepe" />
                    <h4>Pepe Gonzi - 2025</h4>
                    <p>Este reloj superó mis expectativas. El diseño es muy elegante y combina perfectamente con cualquier look, desde casual hasta más formal. Además, la precisión y <strong>los detalles en la construcción son impecables.</strong> Sin duda, es una pieza de alta calidad que vale cada centavo.</p>
                </li>
                <li className="reviewsdepersonassubcontaineritem">
                    <img src="/reviewsdepersonas/pepe.jpg" alt="Pepe" />
                    <h4>Pepe Gonzi - 2025</h4>
                    <p>Este reloj superó mis expectativas. El diseño es muy elegante y combina perfectamente con cualquier look, desde casual hasta más formal. Además, la precisión y <strong>los detalles en la construcción son impecables.</strong> Sin duda, es una pieza de alta calidad que vale cada centavo.</p>
                </li>
            </ul>
        </section>
    )
}