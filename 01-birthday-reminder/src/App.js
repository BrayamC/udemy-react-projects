import React, { useState } from 'react';
import { useEffect } from 'react';
import data from './data';
import List from './List';
import data2 from './data2';

function App() {

  const [people, setPeople] = useState([]);
  const [holidays, setHolidays] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async() => {
    setIsLoading(true);
    setIsError(false);
    try {
      setHolidays(data2);
      setIsLoading(false);
      setPeople(data);
    } catch (e) {
      console.log(e);
      setIsError(true);
    }
  } 

  useEffect(() => {
    fetchData();
  }, [])

  if(isError){
    return <h1> Error...</h1>;
  }

  if(isLoading){
    return <h1> Loading...</h1>;
  }

  if(!isLoading){
    // console.log(holidays);
    return (
      <>
      <main>
        <section className="container">
          <h1> Holidays Today</h1>
          <List holidays={holidays}/>
        </section>
        
      </main>
      </>
    );
  }
}


export default App;
