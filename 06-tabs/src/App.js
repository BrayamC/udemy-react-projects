import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { data } from './data';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
//const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [names, setNames] = useState([]);
  const [display, setDisplay] = useState({});
  const [moreInfo, setmoreInfo] = useState(true);
  const [showAll, setShowAll] = useState(true);

  const fetchData = () => {
    setLoading(true);
    try {
      setPeople(data);
      // fetch(url)
      //   .then(response => response.json())
      //   .then(data => setData(data));
      setLoading(false)
    } catch (e) {
      setError(true);
    }
  }



  const changeDisplay = (name) => {
    setDisplay(people.find((person) => person.company === name))
  }

  useEffect(() => {
    setNames([...new Set(people.map(person => person.company))])
  }, [people])

  useEffect(() => {
    fetchData();
    
  }, [])

  const setMore = () => {
    setmoreInfo(!moreInfo)
    setShowAll(!showAll)
  }
  if(error) return <>Error...</>
  if(loading) return <>Loading...</>
  
  if(!loading){
    //console.log(people);
    //console.log(names);
    return (
      <>
        <h1>Experience</h1>
        <section> 
          {
            names.map((name, idx) => {
              return <button key={idx} className="job-btn" onClick={() => changeDisplay(name)}>{name}</button>
            })
          }
        </section>
        <section>
          <h3>{display.title}</h3>
          <h4>{display.company}</h4>
          <h4>{display.dates}</h4>
          <div>
            {
              display.duties?.map((duty, idx) => {
                if(showAll){
                  while(idx < 3){
                    return <div key = {idx}>
                        <FaAngleDoubleRight />
                        <p>{duty}</p>
                      </div>
                  } 
                } else {
                    return <div key = {idx}>
                              <FaAngleDoubleRight />
                              <p>{duty}</p>
                            </div>
                }
              })
            }
          </div>
          {moreInfo ? <button className = "job-btn" onClick={() => setMore()}>More info</button> : <button className = "job-btn" onClick={() => setMore()}>Less info</button> }
        </section>
      </>
    );
  }

}

export default App
