import React from "react";
import { NavLink } from "react-router";

export const NavegadorApp = () => {
    return (
        <div className='Navegador'>
            <NavLink to='/'>Cerrar sesion</NavLink>
            {' '}<span>|</span>{' '}
            <NavLink to='/desc'>Descripción</NavLink>
            {' '}<span>|</span>{' '}
            <NavLink to='/menu'>Menú</NavLink>
        </div>
    );
};

export const NavegadorMenu = () => {
    return (
        <td className="menu__Opciones">
            <tr><td><NavLink to='/Menu/Nuevo'><button>Nuevo Menu</button></NavLink></td></tr>
            <tr><td><NavLink to='/Menu/NuevaReceta'><button>Nueva Receta</button></NavLink></td></tr>
            <tr><td><NavLink to='/Menu/NuevoIngrediente'><button>Nuevo Ingrediente</button></NavLink></td></tr>
            <tr><td><NavLink to='/Menu/NuevoLista'><button>Lista de Compras</button></NavLink></td></tr>
        </td>
    );
};