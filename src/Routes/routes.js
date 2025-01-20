import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router";
import { Descripcion } from "../Pages/Descripcion";
import { LogIn } from "../Pages/LogIn";
import { ErrorPagina } from "../Pages/Error";
import { NavegadorApp } from "../Components/Navegador";
import { MenuApp } from "../Pages/Menu";
import { MenuNuevo } from "../Pages/MenuPages/NuevoMenu";
import { MenuNuevaReceta } from "../Pages/MenuPages/NuevaReceta";
import { MenuNuevoIngrediente } from "../Pages/MenuPages/NuevoIngrediente";
import { MenuListaCompras } from "../Pages/MenuPages/ListaCompras";


export const AppPaginas = () => {
    return (
        <div className="Paginas">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<LogIn />} />
                    <Route path="*" element={<PaginasProtegidas>
                    </PaginasProtegidas>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
};

const PaginasProtegidas = ({ children }) => {
    const usuario = JSON.parse(localStorage.getItem("user")) || null;

    if (usuario) {
        return (
            <>
                <NavegadorApp/>
                <Routes>
                    <Route exact path="/Menu" element={<MenuApp />} />
                    <Route exact path="/desc" element={<Descripcion />} />
                    <Route exact path="/Menu/Nuevo" element={<MenuNuevo/>}/>
                    <Route exact path="/Menu/NuevaReceta" element={<MenuNuevaReceta/>}/>
                    <Route exact path="/Menu/NuevoIngrediente" element={<MenuNuevoIngrediente/>}/>
                    <Route exact path="/Menu/NuevoLista" element={<MenuListaCompras/>}/>
                    <Route path="*" element={<ErrorPagina />} />
                </Routes>
            </>
        );
    } else {
        return (<Navigate to="/" />);
    }
};