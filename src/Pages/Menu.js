import React from "react";
import { NavegadorMenu } from "../Components/Navegador";
export const MenuApp = () => {
    return (
        <table className="Menu">
            <tr>
                    <NavegadorMenu/>
                <td>
                    <tr className="Menu__Head">
                        <td><h3>Menú del día: Lunes </h3></td>
                        <td><h3>Periodo: 20 al 26 de Enero</h3></td>
                        <td><h3>Porsiones: Una</h3></td>
                    </tr>
                    <tr>
                        <td className="menu__Comidas">
                            <tr><td>
                                <h3>Desayuno</h3>
                                <p> 2 Wafles <br/>
                                    1 Licuado Verde
                                </p>
                                </td></tr>
                            <tr><td>
                                <h3>Colasión de la mañana</h3>
                                <p> 12 Cacahuates <br/>
                                    1 Naranja
                                </p>
                                </td></tr>
                            <tr><td>
                                <h3>Comida</h3>
                                <p>
                                    Bistec con verduras en salsa verde<br/>
                                    2 tortillas<br/>
                                    Frijoles de la olla<br/>
                                    Agua natural
                                </p>
                                </td></tr>
                            <tr><td>
                                <h3>Colasión de la tarde</h3>
                                <p>2 huevos cosidos</p>
                                </td></tr>
                            <tr><td>
                                <h3>Cena</h3>
                                <p>
                                    1 Nopal asado <br/>
                                    50g de queso Panela<br/>
                                    1 tortilla
                                </p>
                                </td></tr>
                            <tr><td>
                                <h3>Recomendaciones</h3>
                                <p>
                                    Tomar al menos 2L de agua durante el día sin contar el agua que se tome en las comidas<br/>
                                    Ejercitarce al menos 30 minutos al día<br/>
                                    Este menu es un ejemplo y los valores no son correctos.
                                </p>
                                </td></tr>
                        </td>
                        <td className="menu__Objetivos">
                            <tr><th>Objetivos</th></tr>
                            <tr><td>Calorias: 1900 </td></tr>
                            <tr><td>Proteinas: 100g</td></tr>
                            <tr><td>Carbohidratos: 30%</td></tr>
                            <tr><td>Sodio: 3g</td></tr>
                            <tr><td>Azucares: 20g</td></tr>
                        </td>
                    </tr>
                </td>
            </tr>
        </table>
    );
};