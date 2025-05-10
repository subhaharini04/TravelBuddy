import { React, useState } from 'react'
import cloud from '../assets/cloud.jpeg'
import plane from '../assets/plane.png'
import dayjs from 'dayjs';

export const Dashboard = () => {
  const [open, setOpen] = useState(false)
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Set minimum date to today
  const today = dayjs().format('YYYY-MM-DD');

  const handleStartDateChange = (e) => {
    const selectedDate = e.target.value;
    // Reset end date if it's before new start date
    if (endDate && dayjs(endDate).isBefore(selectedDate)) {
      setEndDate('');
    }
    setStartDate(selectedDate);
  };

  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    if (startDate && dayjs(newEndDate).isBefore(startDate)) {
      alert("End date cannot be before start date!");
      return;
    }
    setEndDate(newEndDate);
  };

  const calculateDuration = () => {
    if (!startDate || !endDate) return null;

    const days = dayjs(endDate).diff(startDate, 'day') + 1;
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;

    return { days, weeks, remainingDays };
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${cloud})` }}
    >
      <div className='text-center'>
        <h1 className='text-2xl sm:text-2xl md:text-4xl font-semibold'>
          Where is your next Destination?
        </h1>

        <div className='relative mt-4 bg-white rounded-lg p-2 shadow-md max-w-md mx-auto'>
          <input
            type="search"
            placeholder="Plan your trip with us"
            className="w-full p-3 outline-none text-black placeholder-slate-500 rounded-lg bg-sky-100 shadow-inner"
            onClick={() => setOpen(!open)}
          />
          <div 
            className="absolute right-2 top-2 cursor-pointer rounded-xl bg-orange-100 hover:bg-orange-200 transition"
            onClick={() => setOpen(!open)}
          >
            <img src={plane} alt="plane" className="w-8 h-8 m-2 mx-4" />
          </div>

          {open && (
            <div className=" p-4">
            <p className="font-medium my-3">Pick your perfect travel dates!</p>
              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-black mb-1 text-left">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    min={today}
                    className="w-full p-2 border-none rounded-md cursor-pointer bg-sky-100 shadow-inner"
                    onClick={(e) => e.target.showPicker()}
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-medium text-black mb-1 text-left">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                    min={startDate || today}
                    disabled={!startDate}
                    className="w-full p-2  border-none rounded-md cursor-pointer bg-sky-100 shadow-inner"
                    onClick={(e) => !e.target.disabled && e.target.showPicker()}
                  />
                </div>
              </div>

              {startDate && endDate && (
                <div className="mt-4 p-3  rounded-md bg-sky-100 shadow-inner">
                  <p className="font-medium">
                    Trip Duration: {calculateDuration().days} days
                    {calculateDuration().weeks > 0 && (
                      <span className="text-sm text-gray-600">
                        {' '}({calculateDuration().weeks} week
                        {calculateDuration().weeks > 1 ? 's' : ''}
                        {calculateDuration().remainingDays > 0 ?
                          ` ${calculateDuration().remainingDays} day${calculateDuration().remainingDays > 1 ? 's' : ''}` : ''
                        })
                      </span>
                    )}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}