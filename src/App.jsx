import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Packages from './pages/Packages'
import Doctors from './pages/Doctors'
import User from './pages/User'
import Trainer from './pages/Trainer'


import ProtectedRoutes from './components/ProtectedRoutes'
import MainLayout from './pages/MainLayout'

function App() {
  

  return (
    <HashRouter>     
        <Routes>
            <Route
            path='/login'
            element={ <Login/> }
            />
          <Route element={ <MainLayout/> }>
        <Route
        path='/'
        element={ <Home/> }
        />
        <Route 
        path='/paquetes'
        element={ < Packages/> }
        />
         {/*rutas protegidas add la ruta Layout*/}
         <Route element={<ProtectedRoutes/>} > 
              <Route 
              path='/medicos'
              element={ <Doctors/>}
              />
              <Route 
              path='/usuarios'
              element={ <User/> }
              />
              <Route 
              path='/entrenadores'
              element={ <Trainer/>}
              />
          </Route>
          </Route>
      </Routes>
    </HashRouter>
  )
}

export default App

