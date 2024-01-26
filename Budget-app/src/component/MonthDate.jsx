import {useState } from 'react';

const monthsDate = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'september', 'October', 'November', 'December']
const yearDate = ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999' , '1998', '1997', '1996', '1995' , '1996', '1995' , '1994', '1993' , '1992', '1991','1990']
const monthsDay = [ '1', '2',  '3', '4', '5', '6', '7', '8', '9',  '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31' 
 

 ];

function MonthsDateSelect() {
    const [selectedMonth, setSelectedMonth] = useState(0);
    const [selectedYear, setSelectedYear] = useState(0);
    const [selectedDay, setSelectedDay] = useState(0);

    // const handleMonthClick = (index) => {
    //     setSelectedMonth(index);
    // };
    const handleChange = (event) => {
        setSelectedMonth(event.target.value);
        // setSelectedYear(event.target.value);

    };
    const handleChanges = (event) => {
        // setSelectedMonth(event.target.value);
        setSelectedYear(event.target.value);

    };
    const handleChanged = (event) => {
        // setSelectedMonth(event.target.value);
        setSelectedDay(event.target.value);

    };
    return ( 
        <div className='d-flex m-2'>
            <h6 className='d-flex m-2 grey_color_payout'> Select month: </h6>
           <select className='p-3 bg-dark text-light'   value={selectedMonth} onChange={handleChange}>{monthsDate.map((month, index) => (
             <option className='' key={index} value={index}>{month}</option>
            ))}
            </select> 
            <select className='p-3 bg-dark text-light'   value={selectedDay} onChange={handleChanged}>{monthsDay.map((day, index) => (
             <option className='' key={index} value={index}>{day}</option>
            ))}
            </select> 
           
            <select className='p-3 bg-dark text-light'   value={selectedYear} onChange={handleChanges}>{yearDate.map((year, index) => (
             <option className='' key={index} value={index}>{year}</option>
            ))}
            </select> 
        </div>
    )
}
export default MonthsDateSelect;