import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const LogIn = () => {
    const navigate = useNavigate();

    const [correo, setCorreo] = useState(" ");
    const [contrasena, setContrasena] = useState("");

    const usuario = {
        correo: 'testeando@gmail.com',
        contrasena: '123456789'
    }

    useEffect(()=>{
        localStorage.removeItem('user');
    },[]);

    const useHandleSubmit = (e) => {
        e.preventDefault()
        if (usuario.correo === correo && usuario.contrasena === contrasena) {
            localStorage.setItem('user', JSON.stringify(usuario.correo));
            navigate('/menu', { replace: true });
        } else {
            alert('Correo o contraseña in correctos')
        }
    }

    return (
        <div className="LogIn">
            <h1 className="LogIn__Title">Inicio de Sesion</h1>
            <form   className="logIn"
                    on onSubmit={useHandleSubmit}
                    action="#" method="POST">
                <label className="LogIn__labels">Correo</label><br></br>
                <input className="LogIn__in" type="email" 
                        value={correo} 
                        onChange={(e) => setCorreo(e.target.value)} 
                        required/>
                <br></br>
                <label className="LogIn__labels">Contraseña</label><br></br>
                <input className="LogIn__in" type="password" 
                        value={contrasena} 
                        onChange={(e) => setContrasena(e.target.value)} 
                        required/>
                <br></br>
                <button className="LogIn__Entrar">Entrar</button>
            </form>
        </div>
    )
};