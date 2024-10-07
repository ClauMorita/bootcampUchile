import { Link, Outlet } from "react-router-dom"
import { MainLayout } from "../layout/MainLayout"

export const DashboardPage = () => {

    return (
        <MainLayout>
            <h3>Dashboard</h3>
            <p>Pagina en proceso</p>
            <Link to="detalle">Detalle</Link>
            <br />
            <Link to="/dashboard">general</Link>
            <Outlet />
        </MainLayout>
    )
}