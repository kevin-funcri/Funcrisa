import { Outlet } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


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
      <footer className="footer">
        <div>
            <h2> Club Makarios</h2>
            <div>
                Contactos: 09213213131
            </div>
        </div>
        <div>
        <ul>
            <li>Facebook</li>
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>Whatsapp</li>
        </ul>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
