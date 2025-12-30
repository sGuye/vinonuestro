import { useState } from "react";
import styles from "./createproduct.module.css";

function CreateProduct() {
  const [formData, setFormData] = useState({
    name: "",
    winery: "",
    price: "",
    stock: "",
    history: "",
    taste: "",
    pairing: "",
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    // Placeholder para luego conectar con lógica de upload
    console.log("Files dropped:", files);
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      winery: "",
      price: "",
      stock: "",
      history: "",
      taste: "",
      pairing: "",
      images: [],
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        {/* Nombre del vino */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Nombre del vino</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Ej. Malbec Reserva 2021"
            className={styles.input}
          />
        </div>

        {/* Bodega */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Bodega</label>
          <input
            type="text"
            name="winery"
            value={formData.winery}
            onChange={handleInputChange}
            placeholder="Ej. Bodega Familia Mendoza"
            className={styles.input}
          />
        </div>

        {/* Precio y Stock */}
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Precio</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="850"
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Stock</label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleInputChange}
              placeholder="50"
              className={styles.input}
            />
          </div>
        </div>

        {/* Historia narrativa */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Historia narrativa</label>
          <textarea
            name="history"
            value={formData.history}
            onChange={handleInputChange}
            placeholder="Cuenta la historia única de este vino..."
            className={styles.textarea}
            rows="4"
          />
        </div>

        {/* Perfil de sabor */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Perfil de sabor</label>
          <textarea
            name="taste"
            value={formData.taste}
            onChange={handleInputChange}
            placeholder="Describe las características de sabor..."
            className={styles.textarea}
            rows="4"
          />
        </div>

        {/* Maridaje sugerido */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Maridaje sugerido</label>
          <textarea
            name="pairing"
            value={formData.pairing}
            onChange={handleInputChange}
            placeholder="Qué comidas acompañan mejor este vino..."
            className={styles.textarea}
            rows="4"
          />
        </div>

        {/* Imágenes */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Imágenes</label>
          <div
            className={styles.dropzone}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className={styles.dropzoneContent}>
              <span className={styles.uploadIcon}>⬆</span>
              <p>Arrastra imágenes aquí o haz clic para seleccionar</p>
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className={styles.formActions}>
          <button type="submit" className={styles.submitBtn}>
            Guardar vino
          </button>
          <button type="button" onClick={handleCancel} className={styles.cancelBtn}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;