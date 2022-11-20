import React from 'react'
import "../styles/css/Filters.css"

export default function Filters(showFilters) {
//styling, ignore it
    let activeLink = document.querySelector("button.active");
    function buttonStyle(e) {
        e.preventDefault();
        activeLink = document.querySelector("button.active");
        activeLink.classList.remove('active')
        e.target.classList.add('active')
    }





  return (
    <div className={showFilters.open? 'filters-main-mobile': `filters-main`}>
        {showFilters.open? '' : <span className='filters-title'>Filters</span>}
        <form className='filters-form'>
            <label className='filters-label' htmlFor="from">From</label>
            <select className='filters-field filters-input' id="from">
                <option>Almaty</option>  
                <option>Antalya</option>
                <option>Bali</option>
                <option>Bangkok</option>
                <option>Europe</option>
                <option>Kas</option>
                <option>Kazan</option>
                <option>Krasnodar</option>
                <option>Minsk</option>
                <option>Moscow</option>
                <option>Novosibirsk</option>
                <option>Pangan</option>
                <option>Rostov-on-Don</option>
                <option>Russia</option>
                <option>Seoul</option>
                <option>Sheremetyevo</option>
                <option>St.Petersburg</option>
                <option>Sydney</option>
                <option>Thailand</option>
                <option>Turkey</option>
                <option>Warsaw</option>
                <option>Yekaterinburg</option>
            </select>

            <label className='filters-label' htmlFor="to">To</label>
            <select className='filters-field filters-input' id="to">
                <option>Almaty</option>  
                <option>Antalya</option>
                <option>Bali</option>
                <option>Bangkok</option>
                <option>Europe</option>
                <option>Kas</option>
                <option>Kazan</option>
                <option>Krasnodar</option>
                <option>Minsk</option>
                <option>Moscow</option>
                <option>Novosibirsk</option>
                <option>Pangan</option>
                <option>Rostov-on-Don</option>
                <option>Russia</option>
                <option>Seoul</option>
                <option>Sheremetyevo</option>
                <option>St.Petersburg</option>
                <option>Sydney</option>
                <option>Thailand</option>
                <option>Turkey</option>
                <option>Warsaw</option>
                <option>Yekaterinburg</option>
            </select>

            <label className='filters-label' htmlFor="departure">Departure date</label>
            <input className='filters-field filters-input' id="departure">
            </input>

            <label className='filters-label' htmlFor="arrival">Arrival date</label>
            <input className='filters-field filters-input' id="arrival">
            </input>

            <label className='filters-label' htmlFor="weight">Size of delivarable</label>
            <select className='filters-field' id="weight">
                <option>Up to 1kg</option>
                <option>2kg</option>
                <option>Large</option>
            </select>

            <label className='filters-label' for="reward">Reward</label>
            <div className='reward-choice-container'>
                <button onClick={(e)=>buttonStyle(e)} className='reward-filter-btn reward-filter-btn-left '>Yes</button>
                <button onClick={(e)=>buttonStyle(e)} className='reward-filter-btn active'>No</button>
                <button onClick={(e)=>buttonStyle(e)} className='reward-filter-btn reward-filter-btn-right' >N/A</button>
            </div>
        </form>
    </div>
  )
}
