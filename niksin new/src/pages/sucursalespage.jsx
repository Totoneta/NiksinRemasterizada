import { sucursales } from "../data/sucursales"

export default function SucursalesPage() {
    return (
        <>
            <aside className="sucursalescontainer">
                <ul className="sucursalescontainerlist">
                    {
                        sucursales.map((e) => {
                            return (
                                <li key={e.id} className="sucursalescontaineritem">
                                    <iframe src={e.mapa} />
                                    <div className="sucursalescontaineritemtext">
                                        <h3>{e.titulo}</h3>
                                        <span>{e.direccion}</span>
                                        <p>{e.localidad}</p>
                                        <span>{e.horario}</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </aside>
        </>
    )
}