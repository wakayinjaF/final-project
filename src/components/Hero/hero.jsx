import React from 'react'
import "./hero.css"
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
export const hero = () => {
  return (
    <section className="hero-wrapper">
         <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
            <div className="flexColStart hero-left">
               <div className="hero-title">
                <div className="orange-circle" />
                    <h1>
                        Discover <br />
                        More suitable <br />
                        Hostels
                    </h1>
               </div>

               <dev className="flexColStart hero-description">
                    <span className='secondaryText'>Find a variety of hostels that suit you very easily</span>
                    <span className='secondaryText'>Forget all difficulties in finding a residence for you at campus</span>
               </dev>

                <div className="flexCenter search-bar">
                   <HiLocationMarker color="var(--blue)" size={25}/>
                   <input type="text" />
                   <button className="button">search</button>
                </div>

                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={8800} end={9000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Premium Products</span>
                    </div> 

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1950} end={2000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>happy Customers</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp  end={28}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText' >Award Winnigs</span>
                    </div>
                </div>
            </div>
          {  /* right side */}
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./2023-07-17.jpg" alt="" />
                </div>
            </div>
         </div>
    </section>
  )
}

export default hero