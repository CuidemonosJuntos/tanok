import React from 'react';
import Nav from './Nav';

export default function Header() {
    return (
        <header>
            <Nav />
            <div className="hero-text-box">
                <h1>Transforma Tú Vida!<br></br>Aprende de las Culturas Ancestrales</h1>
                <a className="btn btn-full" href="/">Regístrate</a>
                <a className="btn btn-ghost" href="https://form.typeform.com/to/VOmPP1iL">Autodiagnóstico</a>
            </div>
        </header>
    )
}
