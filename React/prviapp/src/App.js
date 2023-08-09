import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import { customProducts } from './data/data';
// import Button from './components/Button';

function App() {

  const [data,setData] = useState([])

  //Domaci return filtered phones from products, u Card
  //U vrh ugla visinaPopusta
  //title,brand,price u body Carda.
  // const [broj,setBroj] = useState([1,2,3,4,5,6,7,8,9,10])
  // console.log(customProducts)
  const fetchData =()=>{ 
    fetch("http://dummyjson.com/products")
       .then((res)=>res.json())
       .then((data) => setData(data.products))
}
console.log(data)

  return (
    <div className="app">
      {data.map((product)=> product.price>500)}
      {/* {customProducts.map((product,i)=> <Card key={i} name={product.title} desc={product.description} price={product.price} />)} */}
      {/* {broj.map((el)=>{
        return <Button  body={el}/>
      })} */}
      <button onClick={()=> fetchData()}>Fetch data</button>
      {/* <button className='button'onClick={()=>{setBroj(()=>broj+1)}}>Increment</button>
      {broj}
      <button className='button'onClick={()=>{setBroj(()=>broj-1)}}>Decrement</button> */}
      {/* <Card 
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
       /> */}
    </div>
  );
}

export default App;
