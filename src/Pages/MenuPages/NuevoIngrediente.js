import React from "react";
import underconstruction from './Images/underconstruction.jpg';

export const MenuNuevoIngrediente = () => {
    return(
        <div className="menu__NuevoIngrediente">
            <h1>Formulario para agregar un nuevo Ingrediente </h1>
            <img className="menu__Underconstruction" src={underconstruction} alt="under construction"/>
        </div>
    );
}