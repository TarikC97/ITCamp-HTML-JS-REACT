import React, { useState } from 'react'

const Async = () => {
  const [dataJson, setDataJson] = useState([])
  const fetchData = () => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setDataJson(data.products))
  }
  console.log(dataJson)
  return (
    <div>
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
