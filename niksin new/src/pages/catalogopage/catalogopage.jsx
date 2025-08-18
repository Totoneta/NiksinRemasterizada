import FiltrosDeCatalogo from "../../components/filtrosdecatalogo/filtrosdecatalogo";
import ListadoDeProductos from "../../components/listadodeproductos/listadodeproductos";
import './catalogopage.css'

export default function CatalogoPage () {

    return(
        <section className="catalogopagecontainer">
            <FiltrosDeCatalogo />
            <ListadoDeProductos />
        </section>
    )
}