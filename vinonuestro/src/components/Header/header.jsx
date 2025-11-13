import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.headerBar}>
      <div className={styles.headerInner}>
        <div className={styles.brand} onClick={() => navigate("/")}>
          <div className={styles.logo}>Vino Nuestro</div>
        </div>

        <nav className={styles.mainNav}>
          <button className={styles.navButton} onClick={() => navigate("/foryou")}>Para ti</button>
          <button className={styles.navButton} onClick={() => navigate("/favorites")}>Favoritos</button>
          <button className={styles.navButton} onClick={() => navigate("/checkout")}>Carrito</button>
        </nav>

        <div className={styles.profileWrap}>
          <button className={styles.profileBtn} aria-label="Ir al perfil">👤</button>
        </div>
      </div>
    </header>
  );
}

export default Header;