import React from "react";
import underconstruction from './Images/underconstruction.jpg';

export const MenuListaCompras = () => {
    return(
        <div className="menu__ListaCompras">
            <h1>Lista de compras </h1>
            <img className="menu__Underconstruction" src={underconstruction} alt="under construction"/>
        </div>
    );
}