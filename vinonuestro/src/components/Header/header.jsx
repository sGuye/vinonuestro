import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className={styles.header}>
        {/* Header Desktop */}
        <div className={styles.headerDesktop}>
          <div className={styles.headerLogoContainer}>
            <NavLink to="/" aria-label="Ir al inicio">
              <img
                className={styles.headerLogo}
                src="../../src/assets/vinonuestro.jpg"
                alt="Logo de Vino Nuestro"
              />
            </NavLink>
          </div>
          <nav className={styles.headerNav} aria-label="Navegación principal">
            <div>
              <form className={styles.headerSearchForm} role="search">
                <input
                  type="search"
                  name="q"
                  placeholder="Buscar"
                  aria-label="Buscar"
                  autocomplete="off"
                />
                <button
                  type="button"
                  aria-label="Limpiar búsqueda"
                  className={styles.searchClearBtn}
                >
                  <i className="fas fa-times"></i>
                </button>
                <button type="submit" aria-label="Buscar">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>

            <ul className={styles.headerNavItems}>
              <NavLink
                to="/"
                className={styles.headerNavItem}
                aria-label="inicio"
              >
                <span class="material-symbols-rounded">home</span>
              </NavLink>

              <NavLink
                to="/aboutyou"
                className={styles.headerNavItem}
                aria-label="Descubrir"
              >
                <span class="material-symbols-rounded">magic_button</span>
              </NavLink>

              <NavLink
                to="/favorites"
                className={styles.headerNavItem}
                aria-label="Favoritos"
              >
                <span class="material-symbols-rounded">favorite</span>
              </NavLink>

              <NavLink
                to="/cart"
                className={styles.headerNavItem}
                aria-label="Carrito"
              >
                <span class="material-symbols-rounded">shopping_bag</span>
              </NavLink>

              <NavLink
                to="/profile"
                className={styles.headerNavItem}
                aria-label="Perfil"
              >
                <span class="material-symbols-rounded">person</span>
              </NavLink>
            </ul>
          </nav>
        </div>

        {/*-- Header Mobile --*/}
        <div className={styles.headerMobile}>
          <div className={styles.headerLogoContainer}>
            <NavLink to="/" aria-label="Ir al inicio">
              <img
                className={styles.headerLogo}
                src="../../src/assets/vinonuestro.jpg"
                alt="Logo de Vino Nuestro"
              />
            </NavLink>
          </div>

          <nav className={styles.headerNav} aria-label="Navegación superior">
            <form className={styles.headerSearchForm} role="search">
              <input
                type="search"
                name="q"
                placeholder="Buscar"
                aria-label="Buscar"
                autocomplete="off"
              />
              <button
                type="button"
                aria-label="Limpiar búsqueda"
                className={styles.searchClearBtn}
              >
                <i class="fas fa-times"></i>
              </button>
              <button type="submit" aria-label="Buscar">
                <i class="fas fa-search"></i>
              </button>
            </form>

            <ul className={styles.headerNavItems}>
              <NavLink
                to="/cart"
                className={styles.headerNavItem}
                aria-label="Carrito"
              >
                <span class="material-symbols-rounded">shopping_bag</span>
              </NavLink>
            </ul>
          </nav>

          <nav
            className={styles.navBottom}
            aria-label="Navegación inferior"
          >
            <ul className={styles.headerNavItems}>
              <NavLink
                to="/"
                className={styles.headerNavItem}
                aria-label="Inicio"
              >
                <span class="material-symbols-rounded">home</span>
              </NavLink>

              <NavLink
                to="/aboutyou"
                className={styles.headerNavItem}
                aria-label="Descubrir"
              >
                <span class="material-symbols-rounded">magic_button</span>
              </NavLink>

              <NavLink
                to="/favorites"
                className={styles.headerNavItem}
                aria-label="Favoritos"
              >
                <span class="material-symbols-rounded">favorite</span>
              </NavLink>

              <NavLink
                to="/profile"
                className={styles.headerNavItem}
                aria-label="Perfil"
              >
                <span class="material-symbols-rounded">person</span>
              </NavLink>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
