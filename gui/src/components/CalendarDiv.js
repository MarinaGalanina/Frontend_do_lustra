import React, { useState, useEffect } from 'react';
function daysInMonth (month, year) {
  return new Date(year, month, 0).getDate();
}
function setCalendar(numberOfDays)
{
  let rowArray=[]
  let subRowArray=[]
  for(let i=1;i<numberOfDays+1;i++)
  {
    if(i===new Date().getDate())
    {
      subRowArray.push(<div className='CalendarDayField Actual' key={i}>{i}</div>);
    }
    else
    {
      subRowArray.push(<div className='CalendarDayField' key={i}>{i}</div>);
    }
    
    if(subRowArray.length===7)
    {
      
      rowArray.push(subRowArray)
      subRowArray=[]
    }
    if(i===numberOfDays&&subRowArray.length!==7)
    {
      rowArray.push(subRowArray)
      subRowArray=[]
    }
  }
  //console.log(numberOfDays)
  return rowArray
}
function CalendarDiv() {//{time.getUTCMonth()+1}.{time.getUTCDate()}.{time.getUTCFullYear()}

  const [time, setTime] = useState(new Date());
  const [calendarArray,setCalendarArray]=useState(setCalendar(daysInMonth(time.getMonth(),time.getFullYear())));
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
      setCalendarArray(setCalendar(daysInMonth(time.getMonth()+1,time.getFullYear())))
    }, 1000);
    return () => {
      clearInterval(interval);
      //console.log(time.toString())
      
    };
  }, []);

  return (
    <div className="CalendarDiv">
      <div>{time.getDate()}.{time.getMonth()+1}.{time.getFullYear()}</div>
      {calendarArray.map((e,index)=>{
        return <div className='RowCalendarDayField' key={index}>{e.map((e)=> e)}</div>
      })}
    </div>
  );
}

export default CalendarDiv;
