import './App.css';
import Card from './components/Card';

function App() {

  return (
    <div className="app">
      <Card 
      image1={<img className='img1' src={require('./slika2.jpeg')} alt="slika1" />} 
      name="Air Force 2" 
      desc="Branding shoe from Nike always on Top since 1995 to present."
      price="240$"  />
      <Card 
      image1={<img className='img1' src={require('./slika5.jpg')} alt="slika1" />} 
      name="Adidas Superstar" 
      desc="Branding shoe from Adidas always on Top since 2001 to present."
      price="150$" />
      <Card 
      image1={<img className='img1' src={require('./slika6.jpg')} alt="slika1" />} 
      name="Puma Sport 1" 
      desc="Branding shoe from Puma always on Top since 2003 to present."
      price="120$"
       />
    </div>
  );
}

export default App;
