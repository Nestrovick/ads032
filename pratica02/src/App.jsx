import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Unidades from './pages/Unidades'
import Aulas from './pages/Aulas'
import Matricula from './pages/Matricula'
import Erro404 from './pages/Erro404'
import Layout from './components/Layout'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Inicio />} />
          <Route path="/unidades" element={<Unidades />} />
          <Route path="/aulas" element={<Aulas />} />
          <Route path="/matricula" element={<Matricula />} />
          <Route path="*" element={<Erro404 />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}
