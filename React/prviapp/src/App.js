import './App.css'
import Card from './components/Card'

function App() {
  const niz = [
      { ime: 'Tarik', prezime: 'Curic', godine: '25' },
      { ime: 'Hukic', prezime: 'Gorcevic', godine: '19' },
    ] 
  return (
    <div className='app'>
      {niz.map((el) => (
        <Card ime={el.ime} prezime={el.prezime} godine={el.godine} />
      ))}
    </div>
  )
}

export default App
