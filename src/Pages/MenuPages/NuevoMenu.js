import React from "react";
import underconstruction from './Images/underconstruction.jpg';

export const MenuNuevo = () => {
    return(
        <div className="menu__NuevoMenu">
            <h1>Formulario para agregar un nuevo Menu </h1>
            <img className="menu__Underconstruction" src={underconstruction} alt="under construction"/>
        </div>
    );
}