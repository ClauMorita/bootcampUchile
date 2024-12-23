import { MainLayout } from "../layout/MainLayout";
import styles from "/src/pages/css/adminPage.module.css";

export const AdminPage = () => {
  return (
    <MainLayout>
      <div className={styles.adminPage}>
        <div className={styles.content}>
          <h1>Usuario Administrador</h1>
          <div className={styles.formsWrapper}>
            <div className={styles.formContainer}>
              <h2>Registro de Usuario</h2>
            </div>
            <div className={styles.formContainer}>
              <h2>Registro de Producto</h2>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
