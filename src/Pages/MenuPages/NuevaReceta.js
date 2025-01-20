import React from "react";
import underconstruction from './Images/underconstruction.jpg';

export const MenuNuevaReceta = () => {
    return(
        <div className="menu__NuevaReceta">
            <h1>Formulario para agregar ua nueva receta </h1>
            <img className="menu__Underconstruction" src={underconstruction} alt="under construction"/>
        </div>
    );
}