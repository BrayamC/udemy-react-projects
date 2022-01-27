import React, {useState, useEffect} from 'react';

function SingleColor({color, index}) {

  const [alert, setAlert] = useState(false); 
  
  useEffect(() => {

    if(alert){
      const timeout = setTimeout(() => {
        setAlert(false);
      }, 3000)
      return () => clearTimeout(timeout);
    }
    
  }, [alert])

  return (
      <section 
        className = 
          "co-tile" style={{backgroundColor: `#${color.hex}`, 
          color: index > 10 ? "white" : "black"}}
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(color.hex)
        }}
      >
  
        <p>#{color.hex}</p>
        {alert && <section className = 'alert'> Copied to clipboard </section>}
      </section>
  );
}

export default SingleColor;
