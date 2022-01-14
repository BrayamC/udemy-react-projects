import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import data from './data'

const url = 'https://course-api.com/react-tours-project'
function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => {
      if(tour.id !== id) return tour;
    })
    setTours(newTours);
  }

  const fetchTours = async () => {
    console.log("Fetching API data");
    setLoading(true)
    try {
      //const response = await fetch(url); // returns data with other info
      //const tours = await response.json(); // get the data from the repsonse
      const tours = data;
      setLoading(false);
      setTours(tours);
      console.log(tours);
    } catch (err) {
      setLoading(false);
      console.log(err)
    }
  }
  
  // only runs first render
  useEffect(() => {
    fetchTours();
  }, []) //run this function if any variable in array changes 

  
  if(loading){
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if(tours.length === 0){
    return (
      <>
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className = "btn" onClick={fetchTours}>Refresh</button>
        </div>
      </main>
      
      </>
    );
  }

  return (
    <main>
      <Tours tours = {tours} removeTour = {removeTour}/>
    </main>
  );
  
}

export default App
