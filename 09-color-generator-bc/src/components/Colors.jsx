import React, {useState} from 'react';
import './Colors.css'
import Values from 'values.js'
import SingleColor from './SingleColor'
function Colors() {

    const [color, setColor] = useState('')
    const [colors, setColors] = useState(new Values('#00FFFF').all(10));
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setColors(new Values(color).all(10));
            setError(false);
        } catch (e) {
            setColors(new Values('gray').all(10));
            setError(true);
        }
    }

    return (
      <>
        <article className = 'co-heading'>
            <h1> Color Generator </h1>
            <section className = {error ? 'co-search error' : 'co-search'}>
                <form onSubmit={handleSubmit}>
                    <input 
                        type = "text"
                        value = {color}
                        onChange = {(e) => setColor(e.target.value)}
                        className = {error ? 'error' : null}
                        placeholder = "#00FFFF"
                    />
                    <button type = "submit">submit</button>
                </form>

            </section>
        </article>

        <article className = 'co-colors'> 
                {
                    colors.map((color, id) => {
                        return  <SingleColor key={id} color = {color} index = {id}/> 
                    })
                } 
           
        </article>

      </>
  );
}

export default Colors;
