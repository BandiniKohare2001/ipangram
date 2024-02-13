import React, { useState, useEffect } from 'react';
import "./App.css";
import moment from 'moment-timezone';
import Config from "./util.json";

const App = () => {

  let currentDate = new Date();
  let date = currentDate.toLocaleDateString();




  const [selectedWeek, setSelectedWeek] = useState(moment());
  const [selectedTimezone, setSelectedTimezone] = useState('UTC');
  const [weeklySchedule, setWeeklySchedule] = useState([]);


  useEffect(() => {
    const startOfWeek = selectedWeek.clone().startOf('week');
    const endOfWeek = selectedWeek.clone().endOf('week');

    const loadWeeklyData = () => {
      const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
      const times = Array.from({ length: 1 }, (_, i) => i + 1); // 8 AM to 11 PM
      const schedule = days.map(day => ({
        day,
        times: times.map(time => ({
          hour: `${time < 10 ? '0' : ''}${time}:00`,
          checked: false
        }))
      }));
      setWeeklySchedule(schedule);
    };

    loadWeeklyData();
  }, [selectedWeek, selectedTimezone]);


  const handlePrevWeek = () => {
    setSelectedWeek(selectedWeek.clone().subtract(1, 'week'));
  };

  const handleNextWeek = () => {
    setSelectedWeek(selectedWeek.clone().add(1, 'week'));
  };

  // Handle timezone change
  const handleTimezoneChange = (event) => {
    setSelectedTimezone(event.target.value);
  };

  return (
    <>
      <div className='parent-division'>
        <div className='header-div'>

          <div> <p className='button' onClick={handlePrevWeek}>Previous Week</p></div>

          <div><p>{date}</p>
            <p>{selectedWeek.startOf('week').format('MMMM Do YYYY')} - {selectedWeek.endOf('week').format('MMMM Do YYYY')}</p></div>

          <div> <p className='button' onClick={handleNextWeek}>Next Week</p>
          </div>


        </div>
        Timezone:<br />
        <select value={selectedTimezone} onChange={handleTimezoneChange} className='timezone'>
          <option value="UTC">[UTC-5] Eastern Standard Time </option>
          <option value="America/New_York">America/New York</option>
          <option value="ind">India</option>

        </select>
        <br />
        <br />
        <div>
          {/* <h2>Date :  {dateTime}</h2> */}


        </div>
        <div>
        
          <table>
                <th>Day</th>
          
            <tbody>
              {
                weeklySchedule.map((day, index) => (
                  <tr key={index}>
                    <td className='day-names'>{day.day}</td>
                    {day.times.map((timeSlot, index) => (
                      <td key={index}>



                        {
                          Config.days.map((tim, index) => {
                            const { time1, time2, t3, t4, t5, t6, t7, t8, t9, t10, t11 } = tim
                            return (
                              <div className='d-flex'>
                                <div className='card-container' key={index}>
                                  <div className='card-1'>
                                    <div className='day'>
                                      <input type="checkbox" checked={timeSlot.checked} onChange={() => { }} />
                                      <p>{time1}</p>
                                    </div>

                                    <div className='day'>
                                      <input type="checkbox" checked={timeSlot.checked} onChange={() => { }} />
                                      <p>{time2}</p>
                                    </div>

                                    <div className='day'>
                                      <input type="checkbox" checked={timeSlot.checked} onChange={() => { }} />
                                      <p>{t3}</p>
                                    </div>

                                    <div className='day'>
                                      <input type="checkbox" checked={timeSlot.checked} onChange={() => { }} />
                                      <p>{t4}</p>
                                    </div>

                                    <div className='day'>
                                      <input type="checkbox" checked={timeSlot.checked} onChange={() => { }} />
                                      <p>{t5}</p>
                                    </div>

                                    <div className='day'>
                                      <input type="checkbox" checked={timeSlot.checked} onChange={() => { }} />
                                      <p>{t6}</p>
                                    </div>

                                    <div className='day'>
                                      <input type="checkbox" checked={timeSlot.checked} onChange={() => { }} />
                                      <p>{t7}</p>
                                    </div>
                                    <div className='day'>
                                      {
                                        t8 ? (<input type="checkbox" checked={timeSlot.checked} onChange={() => { }} />) : null
                                      }<p>{t8}</p>
                                    </div>
                                    <div className='day'>
                                      {
                                        t9 ? (<input type="checkbox" checked={timeSlot.checked} onChange={() => { }} />) : null
                                      }<p>{t9}</p>
                                    </div>
                                    <div className='day'>
                                      {
                                        t10 ? (<input type="checkbox" checked={timeSlot.checked} onChange={() => { }} />) : null
                                      }<p>{t10}</p>
                                    </div>

                                    <div className='day'>

                                      {
                                        t11 ? (<input type="checkbox" checked={timeSlot.checked} onChange={() => { }} />) : null
                                      }<p>{t11}</p>


                                    </div>


                                  </div>
                                </div>
                              </div>
                            )
                          })
                        }



                        {/* <hr /> */}
                      </td>

                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default App;
