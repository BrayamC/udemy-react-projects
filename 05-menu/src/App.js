import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

  const [menu, setMenu] = useState([]);
  const [option, setOption] = useState("all");
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setMenu(items);
      setLoading(false);
    } catch (e){
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    setOptions(['all',...new Set(menu.map((item) => item.category))]);
  }, [menu])

  if(loading) {
    return <>Loading...</>
  }

  if(!loading){
    return (
      <main>
        <section className="menu section">
          <div className="title">
            <h1> Our Menu </h1>
            <div className="underline"></div>
          </div>
          <Categories setOption = {setOption} options = {options}/>
          <Menu option = {option} menu = {menu}/>
        </section>
      </main>
    );
  }

}

export default App;
