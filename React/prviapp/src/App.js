import './App.css'
import Card from './components/Card'

function App() {
  const niz = [
    { ime: 'Cips', marka: 'Marbo', cena: '50', status: false },
    { ime: 'Cips', marka: 'Chipsy', cena: '40', status: true },
  ]
  return (
    <div className='app'>
      {niz.map((el) => (
        <Card ime={el.ime} marka={el.marka} cena={el.cena} status={el.status} />
      ))}
    </div>
  )
}

export default App
