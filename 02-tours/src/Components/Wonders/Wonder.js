import React from 'react';

const Wonder = ({id, PictureLink, Type, Latitude,Longitude, Name, Location, WikipediaLink, BuildYear}) => {


  return (
    <section>
        <article className="single-wonder">
          <img src={PictureLink} alt={Name}/>
          <footer>
              <h4 className="wonder-name">{Name}</h4>
              <h4 className="wonder-type">{Type}: {BuildYear}</h4>
              
              <a href={WikipediaLink}> <button className="btn">Learn More</button></a>

              <section className="wonder-location"> 
                <h4>{Location}</h4>
                <h4>{Latitude}, {Longitude}</h4>
              </section>
            
          </footer>
        </article>
    </section>
  );
};

export default Wonder;
