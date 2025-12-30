import { useState } from "react";
import styles from "./dashboard.module.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [products] = useState([
    {
      id: 1,
      name: "Malbec Reserva 2021",
      winery: "Bodega Familia Mendoza",
      price: 850,
      stock: 24,
      sales: 45,
      active: true,
    },
    {
      id: 2,
      name: "Chardonnay Premium",
      winery: "Viña del Valle",
      price: 650,
      stock: 18,
      sales: 32,
      active: true,
    },
  ]);


  const navigate = useNavigate();

  const handleViewDetail = () => {
    navigate("/createproduct");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.pageTitle}>Panel de administración</h2>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Ventas del mes</div>
          <div className={styles.statValue}>$45,680</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Productos vendidos</div>
          <div className={styles.statValue}>127</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Nuevos clientes</div>
          <div className={styles.statValue}>23</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Productos activos</div>
          <div className={styles.statValue}>156</div>
        </div>
      </div>

      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <h3>Gestión de productos</h3>
          <button className={styles.newBtn} onClick={handleViewDetail}>+ Nuevo vino</button>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Ventas</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p.id} className={styles.row}>
                <td>
                  <div className={styles.productCell}>
                    <div className={styles.thumb} aria-hidden />
                    <div>
                      <div className={styles.productName}>{p.name}</div>
                      <div className={styles.productWinery}>{p.winery}</div>
                    </div>
                  </div>
                </td>
                <td className={styles.center}>${p.price}</td>
                <td className={styles.center}>{p.stock}</td>
                <td className={styles.center}>{p.sales}</td>
                <td className={styles.center}>
                  <span className={p.active ? styles.badgeActive : styles.badgeInactive}>
                    {p.active ? "Activo" : "Inactivo"}
                  </span>
                </td>
                <td className={styles.center}>
                  <button className={styles.iconBtn} title="Editar">✎</button>
                  <button className={styles.iconBtn} title="Eliminar">🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;