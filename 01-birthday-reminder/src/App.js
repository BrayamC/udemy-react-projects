import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [people, setPeople] = useState(data);

  return (
    <>
    <main>
      <section className="container">
        <h1> {people.length} Birthdays today</h1>
        <List people={people}/>
        <button id = "clear-All" onClick={() => {setPeople([])}}>Clear All</button>
      </section>
      
    </main>
    </>
  );
}

export default App;
