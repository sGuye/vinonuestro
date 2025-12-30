import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.col}>
          <h4 className={styles.heading}>Vinoteca</h4>
          <p className={styles.text}>Descubre vinos únicos con historias auténticas.</p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.heading}>Productos</h4>
          <ul className={styles.list}>
            <li><a href="/productos/tintos" className={styles.link}>Vinos tintos</a></li>
            <li><a href="/productos/blancos" className={styles.link}>Vinos blancos</a></li>
            <li><a href="/productos/espumantes" className={styles.link}>Espumantes</a></li>
            <li><a href="/ofertas" className={styles.link}>Ofertas especiales</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.heading}>Ayuda</h4>
          <ul className={styles.list}>
            <li><a href="/contacto" className={styles.link}>Contacto</a></li>
            <li><a href="/envios" className={styles.link}>Envíos</a></li>
            <li><a href="/devoluciones" className={styles.link}>Devoluciones</a></li>
            <li><a href="/faq" className={styles.link}>FAQ</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.heading}>Síguenos</h4>
          <div className={styles.socials}>
            <a aria-label="Instagram" className={styles.socialLink} href="https://instagram.com">
              <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
                <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm6.6-.5a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"/>
              </svg>
            </a>

            <a aria-label="Facebook" className={styles.socialLink} href="https://facebook.com">
              <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
                <path fill="currentColor" d="M22 12a10 10 0 1 0-11.5 9.9v-7H8.9v-2.9h1.6V9.4c0-1.6 1-2.6 2.5-2.6.7 0 1.4.1 1.4.1v1.6h-.8c-.8 0-1 0-1 1v1.3h1.7l-.3 2.9h-1.4v7A10 10 0 0 0 22 12z"/>
              </svg>
            </a>

            <a aria-label="Twitter" className={styles.socialLink} href="https://twitter.com">
              <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
                <path fill="currentColor" d="M22 5.8c-.6.3-1.2.5-1.9.6a3.3 3.3 0 0 0-5.6 3v.3A9.3 9.3 0 0 1 3.1 4.9a3.2 3.2 0 0 0 .8 4.3c-.5 0-1-.2-1.4-.4v.1c0 1.6 1.1 3 2.6 3.3-.4.1-.9.1-1.3.05.4 1.2 1.5 2.1 2.9 2.1A6.6 6.6 0 0 1 2 17.6a9.3 9.3 0 0 0 5 1.5c6 0 9.3-5 9.3-9.3v-.42A6.7 6.7 0 0 0 22 5.8z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Vino Nuestro. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

export default Footer;
