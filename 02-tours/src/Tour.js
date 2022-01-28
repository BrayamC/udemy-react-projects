import React from 'react';

const Tour = ({id, PictureLink, Type, Latitude,Longitude, Name, Location, WikipediaLink, BuildYear}) => {


  return (
    <section>
        <article className="single-tour">
          <img src={PictureLink} alt={Name}/>
          <footer>
              <h4 className="wonder-name">{Name}</h4>
              <h4 className="wonder-type">{Type}: {BuildYear}</h4>
              
              <a href={WikipediaLink}> <button className="btn">Learn More</button></a>

              <section className="location"> 
                <h4 className="wonder-Location">{Location}</h4>
                <h4 className="wonder-xy">{Latitude}, {Longitude}</h4>
              </section>
            
          </footer>
        </article>
    </section>
  );
};

export default Tour;
