import './App.css';
import Card from './components/Card';
import Button from './components/Button';

function App() {

  return (
    <div className="app">
      <Card ime="Tarik Curic" age="1997 rodjen." />
      <Card ime="Imad Gazdic" age="2005 rodjen." />
      <Button tekst="Dugme radi" />
    </div>
  );
}

export default App;
