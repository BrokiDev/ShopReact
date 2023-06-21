import React from "react";
import '../header/style.css'

const Header = () => {
    return (

        <header className="header">
                <div className="logo">
                    <h3>Shop</h3>
                </div>
            <nav className="navegacion">
                <ul><li><a href="/">Inicio</a></li></ul>
                <ul><li><a href="/">Catalogo</a></li></ul>
                <ul><li><a href="/">Nosotros</a></li></ul>
                <ul><li><a href="/">Contacto</a></li></ul>
            </nav>
        </header>
    )
}


export default Header