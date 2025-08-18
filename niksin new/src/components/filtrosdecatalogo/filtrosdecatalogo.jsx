import { useDispatch, useSelector } from "react-redux";
import { aplicarFiltros, limpiarFiltros } from "./../../redux/reducers";
import { useState } from "react";
import "./filtrosdecatalogo.css";

export default function FiltrosDeCatalogo() {
    const dispatch = useDispatch();
    const { filtros } = useSelector((state) => state.filtros);

    const [precio, setPrecio] = useState(filtros.precioMaximo);
    const [categoria, setCategoria] = useState(filtros.categoria);
    const [material, setMaterial] = useState(filtros.material);

    const handleFiltrar = () => {
        dispatch(aplicarFiltros({ precioMaximo: precio, categoria, material }));
    };

    const handleLimpiar = () => {
        dispatch(limpiarFiltros());
        setPrecio(10000);
        setCategoria("nada");
        setMaterial("nada");
    };

    return (
        <aside className="filtrosdecatalogocontainer">

            <ul className="filtrosdecatalogolist">

                <li className="filtrosdecatalogoitem">
                    <span>Filtrar por Precio</span>
                    <label htmlFor="precioRango">$<span>{precio}</span></label>
                    <input
                        type="range"
                        id="precioRango"
                        min="0"
                        max="10000"
                        step="1000"
                        value={precio}
                        onChange={(e) => setPrecio(Number(e.target.value))}
                    />
                </li>

                <li className="filtrosdecatalogoitem">
                    <span>Filtrar por Categoría</span>
                    <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                        <option value="nada">Todos</option>
                        <option value="Collar">Collares</option>
                        <option value="Reloj">Relojes</option>
                    </select>
                </li>

                <li className="filtrosdecatalogoitem">
                    <span>Filtrar por Material</span>
                    <select value={material} onChange={(e) => setMaterial(e.target.value)}>
                        <option value="nada">Todos</option>
                        <option value="Oro">Oro</option>
                        <option value="Plata">Plata</option>
                        <option value="Ruby">Ruby</option>
                    </select>
                </li>

            </ul>

            <div className="filtrosdecatalogofinalbtns">
                <button onClick={handleFiltrar}>Aplicar Filtros</button>
                <button onClick={handleLimpiar} className="btnlimpiarfiltros">Limpiar Filtros</button>
            </div>

        </aside>
    );
}
