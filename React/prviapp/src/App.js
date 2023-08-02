import './App.css';

function App() {
  const customStyle={
    fontSize:"70px",
    color:"blue"
  };
  const onClickHandler = () =>console.log('fja')

  return (
    <div className="App">
       <h1 style={customStyle}>Tarik 115</h1>
       <button onClick={onClickHandler}>Dugme</button>
    </div>
  );
}

export default App;
