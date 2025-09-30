/* Router DOM */
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* Componentes */
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

/* Paginas */
import IndexPage from "../pages/indexpage";
import CatalogoPage from "../pages/catalogopage/catalogopage";

export default function Enrutado() {

    return (
        <BrowserRouter>

            <Navbar />

            <Routes>
                <Route path="/" Component={IndexPage} />
                <Route path="/catalogo" Component={CatalogoPage} />
                <Route path="/contacto" Component={IndexPage} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}