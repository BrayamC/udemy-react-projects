import React from 'react';
import './Colors.css'

function Colors() {

    const arr = ['a', 'b','a', 'b','a', 'b','a', 'b','a', 'b','a', 'b','a', 'b','a', 'b','a', 'b',]
  return (
      <>
        <article className = 'co-heading'>
            <h1> Color Generator </h1>
            <section className = 'co-search'>
                <input placeholder = '#f15025'></input>
                <button> Submit </button>
            </section>
        </article>

        <article className = 'co-colors'> 
            
                {
                    arr.map(() => {
                        return <section className = 'co-tile'> a </section>
                    })
                } 
           
        </article>

      </>
  );
}

export default Colors;
