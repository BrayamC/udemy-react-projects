import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Wonders from './Wonders'
import {data} from './data.jsx'

function App() {

  const [loading, setLoading] = useState(true);
  const [wonders, setWonders] = useState([]);

  const fetchWonders = async () => {
    // console.log("Fetching API data");
    setLoading(true)
    try {
      setLoading(false);
      setWonders(data);
      // console.log(data);
    } catch (err) {
      setLoading(false);
      console.log(err)
    }
  }
  
  // only runs first render
  useEffect(() => {
    fetchWonders();
  }, []) //run this function if any variable in array changes 

  
  if(loading){
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Wonders wonders = {wonders} />
    </main>
  );
  
}

export default App
