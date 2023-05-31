import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Erro404 from './pages/Erro404'
import Layout from './components/Layout'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="*" element={<Erro404 />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}
