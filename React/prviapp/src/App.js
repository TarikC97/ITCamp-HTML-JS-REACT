import './App.css'
import Async from './components/Async'
import Card from './components/Card'
import Forme from './components/Forme'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Posts from './components/Posts'
import Products from './components/Products'

function App() {
  // const niz = [
  //   { ime: 'Cips', marka: 'Marbo', cena: '50', status: false },
  //   { ime: 'Cips', marka: 'Chipsy', cena: '40', status: true },
  // ]
  return (
    <div>
      {/* {niz.map((el) => (
        <Card ime={el.ime} marka={el.marka} cena={el.cena} status={el.status} />
      ))} */}
      {/* <Forme /> */}
      {/* <Async /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='products' element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
