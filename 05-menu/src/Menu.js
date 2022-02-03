import React from 'react';

const Menu = ({option, menu}) => {
  return (
    <div className='section-center'>
    {
      menu.map(({id, title, category, price, img, desc}) => {
        if(option === category || option === "all") {
          return <article className="menu-item" key = {id}> 
            <img src={img} alt="" className="photo"/>
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
               <div className="item-text">{desc}</div>
            </div>
          </article>
        } 
      })
    }
    </div>
  )
};

export default Menu;
