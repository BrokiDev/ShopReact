import React from "react";
import '../header/style.css'
import CartWidget from "../cartWidget/cartWidget";

const Header = ({logo}) => {
    return (

        <header className="header">
                <div className="logo">
                    <a href="/"><h3>{logo}</h3></a>
                </div>
            <nav className="navegacion">
                <ul><li><a href="/">Inicio</a></li></ul>
                <ul><li><a href="/">Catalogo</a></li></ul>
                <ul><li><a href="/">Nosotros</a></li></ul>
                <ul><li><a href="/">Contacto</a></li></ul>
                <CartWidget/>
            </nav>
        </header>
    )
}


export default Header