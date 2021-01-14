import React from 'react'

export default function Footer() {
    return (
        <footer>
                <div className="row">
                <div className="col span-1-of-2">
                    <ul className="footer-nav">
                    <li><a href="/">Quienes Somos</a></li>
                    <li><a href="/">Servicios</a></li>
                    <li><a href="/">Planes</a></li>
                    </ul>
                </div>
                <div className="col span-1-of-2">
                    <ul className="social-icons">
                    <li><a href="/">FB</a></li>
                    <li><a href="/">TW</a></li>
                    <li><a href="/">IN</a></li>
                    </ul>
                </div>
                </div>
                <div className="row">
                <p>
                    Copyright &copy; 2021 by Cuidemonos Juntos. Todos los derechos reservados.
                </p>
                </div>
        </footer>
    )
}
