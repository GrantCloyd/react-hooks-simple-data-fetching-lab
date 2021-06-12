import React, { useState, useEffect } from "react"

function App() {
   const [isLoaded, setIsLoaded] = useState(false)
   const [imageData, setImageData] = useState([])

   useEffect(async () => {
      let resp = await fetch("https://dog.ceo/api/breeds/image/random")
      let data = await resp.json()
      console.log(data)
      setImageData(data.message)
      setIsLoaded(true)
   }, [])

   return (
      <div>
         <h1>Hello World</h1>
         {isLoaded ? <img alt="A Random Dog" src={imageData} /> : <p>Loading ...</p>}
      </div>
   )
}

export default App
