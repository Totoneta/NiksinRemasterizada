import { useState } from 'react';
import './listadodeproductos.css';
import { useSelector } from 'react-redux';

export default function ListadoDeProductos() {

    const productosfiltrados = useSelector((state) => state.filtros.productosFiltrados);

    const [indexCarrusel, setIndexCarrusel] = useState(0);

    const HandleCarruselButtons = (e, direccion) => {
        const carrusel = e.target.closest('.productocarruselcontainer').querySelector('.productocarruselcontainerlist');

        const totalImagenes = carrusel.children.length;
        let nuevoIndex = indexCarrusel;

        if (direccion === 'next') {
            nuevoIndex = (indexCarrusel + 1) % totalImagenes;
        } else if (direccion === 'prev') {
            nuevoIndex = (indexCarrusel - 1 + totalImagenes) % totalImagenes;
        }

        setIndexCarrusel(nuevoIndex);

        carrusel.style.transform = `translateX(-${nuevoIndex * 100}%)`;
    };

    return (
        <ul className="listadodeproductoscontainerlist">
            {
                productosfiltrados.map((e) => {
                    return (
                        <li key={e.id} className="listadodeproductoscontaineritem">

                            <div className="productocarruselcontainer">
                                {/* Carrusel imgs */}
                                <div className="productocarruselcontainerlist">
                                    <img src={e.img} alt={e.titulo} />
                                    <img src={e.img2} alt={e.titulo} />
                                    <img src={e.img3} alt={e.titulo} />
                                </div>

                                <div >
                                    {/* Botones para mover el carrusel */}
                                    <button className="productocarruselcontainerbotonesder" onClick={(e) => HandleCarruselButtons(e, 'prev')}><img src="/svg/arrowleft.svg" alt="Deslizar" /></button>
                                    <button className="productocarruselcontainerbotonesizq" onClick={(e) => HandleCarruselButtons(e, 'next')}><img src="/svg/arrowright.svg" alt="Deslizar" /></button>
                                </div>

                                {/* Texto de ver más */}
                                <div className='productocarruselcontainerbotonvermasitem'>
                                    <h4>{e.titulo}</h4>
                                    <span>{e.descripcion}</span>
                                    <div className="productocarruselcontainerbotonvermasitemtexto">
                                        <span><strong>{e.categoria}</strong></span>
                                        <p>${e.precio}</p>
                                    </div>
                                </div>
                            </div>

                        </li>
                    );
                })
            }
        </ul>
    );
}
