import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div>
      <section className="Layout">
        <ul>
            <li>Inicio</li>
            <li>Cursos</li>
            <li>Sobre nosotros</li>
            <li>Paquetes</li>
            <li>Contactos</li>
        </ul>
      </section>
      <Outlet/>
    </div>
  )
}

export default MainLayout
