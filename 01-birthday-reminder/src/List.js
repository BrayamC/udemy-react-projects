import React, {useState} from 'react';

const List = ({holidays}) => {

  let count = 0;

  const dateObj = new Date();
  const currentMonth = dateObj.getMonth() + 1; //months from 1-12
  const currentDay = dateObj.getDate();

  const holidaysToday = holidays.find(({date}) => {
      const dates = date.split("/");
      const [month, day] = dates;
      if(parseInt(day) === currentDay && parseInt(month) === currentMonth){
        return true;
      }
  }) || false;

  if(holidaysToday){
    return (
        <>
        {
          holidays.map(({date, Day, Name, Type, Url, idx}) =>{
            const dates = date.split("/");
            const [month, day] = dates;

            const dateObj = new Date();
            const currentMonth = dateObj.getMonth() + 1; //months from 1-12
            const currentDay = dateObj.getDate();

            if(parseInt(day) === currentDay && parseInt(month) === currentMonth){
              count++;
              return(
                <>
                <a href={Url} alt = "">
                  <article key = {idx} className="person">
                    <div>
                      <h4>{Name}</h4>
                      <p>{date} </p>
                      <p>{Type} </p>
                    </div>
                  
                  </article>
                  </a>
                  
                </>
              )
            }
            else {
              return <></>;
            }
          })
          
        }  
        </>
      );  
  } else {
      // Find closest holidayday: Asumes data is in order by date
      const closestHoliday = holidays.find((holiday) => (parseInt(holiday.date.split("/")[0]) === currentMonth &&  parseInt(holiday.date.split("/")[1]) > currentDay) || holiday.date.split("/")[0] > currentMonth)
      return (
      <a href={closestHoliday.Url} alt = "">
        Closest Holiday:
        <article className="person">
          <div>
            <h4>{closestHoliday.Name}</h4>
            <p>{closestHoliday.date} </p>
            <p>{closestHoliday.Type} </p>
          </div>
        </article>
      </a>
    )
  }
};

export default List;
