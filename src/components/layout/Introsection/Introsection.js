import React from 'react'
import './introsection.scss'
import logo1 from '../../../assets/images/client-databiz.svg'
import logo2 from '../../../assets/images/client-audiophile.svg'
import logo3 from '../../../assets/images/client-meet.svg'
import logo4 from '../../../assets/images/client-maker.svg'
import desktopimg from '../../../assets/images/image-hero-desktop.png'
import mobileimg from '../../../assets/images/image-hero-mobile.png';
const Introsection = () => {
    return (
        <div className="introsection container">
            <div className='sectionone'>
                <h1 className="sectionone__title">
                    Make <br className='hidemobile' />remote work
                </h1>
                <p className="sectionone__typography">
                    Get your team in sync, no matter your location.<br className='hidemobile' />
                    Streamline processes,create team rituals,and<br className='hidemobile' />
                    watch productivity soar.
                </p>

                <button className='sectionone__btn'>Learn more</button>
                <div className='sectionone__logosection'>
                    <a href="/#"><img src={logo1} alt="logo1" /></a>
                    <a href="/#"><img src={logo2} alt="logo2" /></a>
                    <a href="/#"><img src={logo3} alt="logo3" /></a>
                    <a href="/#"><img src={logo4} alt="logo4" /></a>
                </div>
            </div>

            <div className='sectiontwo'>

                <img className='image1' src={desktopimg} alt="desktopimg" />
                <img className='image2' src={mobileimg} alt="mobileimg" />


            </div>
        </div>
    )
}

export default Introsection