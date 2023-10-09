import React, { useEffect, useState } from 'react'

const Async = () => {
  const [dataJson, setDataJson] = useState([])
  const fetchData = () => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setDataJson(data.products))
  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log(dataJson)
  return (
    <div>
      <input type='text' placeholder='Search...' />
      <button
        style={{ backgroundColor: 'red', width: '70px' }}
        onClick={() => console.log('Klik')}
      >
        Search
      </button>
      <button onClick={fetchData}>Fetch Data</button>
      <button
        onClick={() => setDataJson(dataJson.filter((el) => el.id % 2 === 0))}
      >
        Parni Brojevi
      </button>
      <div>
        {dataJson.map((product) => (
          <h1 key={product.id}>{product.id}</h1>
        ))}
      </div>
    </div>
  )
}

export default Async
