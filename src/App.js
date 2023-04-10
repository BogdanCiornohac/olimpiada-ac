import React, { useRef, useReducer } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ball from './Images/ball2.svg'
import basketball from './Images/basketball.svg'
import bg from './Images/tennis_palette_final.svg'
import logo from './Images/logo_svg.svg'
import Count from './Components/Count'
import BallComp from './Components/BallComp'
import balls from './Components/ballsData.js'
import SponsorsSlide from './Components/SponsorsSlide'
import Days from './Components/Days'
import dates from './Components/dates.js'
import './App.css'

// Little helpers ...
const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function App() {
  const initialState = [[true, false, false, false, false], dates[3].text];
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case 0:
        return [[true, false, false, false, false], dates[0].text];
      case 1:
        return [[false, true, false, false, false], dates[1].text];
      case 2:
        return [[false, false, true, false, false], dates[2].text];
      case 3:
        return [[false, false, false, true, false], dates[3].text];
      case 4:
        return [[false, false, false, false, true], dates[4].text];
      default:
        throw new Error();
    }
  }

  const parallax = useRef(true)
  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#AD273A', opacity: '100%' }} />
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#4B8438', opacity: '100%' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#97AD68 ', opacity: '100%' }} />

        { /*teren de basket*/}
        <ParallaxLayer
          offset={-1}
          speed={0}
          factor={3}
          className="layer1"
        />

        {/*teren de fotbal */}
        <ParallaxLayer
          offset={0.2}
          speed={0.13}
          factor={3}
          className="layer2"
        />

        {/* tenis*/}
        <ParallaxLayer
          offset={1.2}
          speed={0.13}
          factor={3}
          className="layer3"
        />


        {/*Primul layer cu tabela si titlu */}
        <ParallaxLayer offset={0}>
          <div className='title-container'>
            <div className='final-title'>
              <img src={logo} alt="logo" className='logo'></img>
              <h1 className='title'>Olimpiada AC</h1>
            </div>
            <marquee className="balls">
              {balls.map((item, index) => <BallComp ballType={item.ballType} time={item.time} />)}
            </marquee>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0}>
          <div className='wrap'>
            <div className='first-container'>
              <div className='scoreboard'>
                <Count />
                <button className='forms-button' onClick={() => window.open("https://forms.gle/1Tyy3CYSva5YiFbQ6", '_blank')}>
                  Inscrie-te!
                </button>
              </div>
            </div>
          </div>
        </ParallaxLayer>


        {/* Mingi*/}
        <ParallaxLayer offset={1.5} speed={-0.25} style={{ pointerEvents: 'none' }}>
          <img src={ball} style={{ width: '12%', marginLeft: '75%' }} alt='cloud' />
        </ParallaxLayer>
        <ParallaxLayer offset={0.20} speed={-0.55} style={{ pointerEvents: 'none' }}>
          <img src={basketball} style={{ width: '22%', marginLeft: '73%' }} alt='cloud' />
        </ParallaxLayer>


        {/* Nori*/}
        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} alt='cloud' />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} alt='cloud' />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} alt='cloud' />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt='cloud' />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} alt='cloud' />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} alt='cloud' />
        </ParallaxLayer>


        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} alt='cloud' />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} alt='cloud' />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} alt='cloud' />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} alt='cloud' />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} alt='cloud' />
        </ParallaxLayer>


        {/* Paleta de tenis */}
        <ParallaxLayer
          offset={2.4}
          speed={0.8}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src={bg} style={{ width: '60%' }} alt='earth' />
        </ParallaxLayer>

        {/* Calendarul de la pagina 2 */}
        <ParallaxLayer offset={1.1} speed={0.5}>
          <div className='calendar-container'>
            <div className='date-container'>
              {dates.map((item, index) => <Days day={item.day} dispatch={dispatch} isActive={state[0][index]} />)}
            </div>
            <div className="text">
              <div className='text-container'>
                <p>
                  {state[1]}
                </p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* Sponsori */}
        <ParallaxLayer offset={2} speed={1}>
          <h1 className="sponsori-title">Sponsori</h1>
          <SponsorsSlide />
        </ParallaxLayer>


        <ParallaxLayer
          offset={2}
          speed={-0.3}
          onClick={() => parallax.current.scrollTo(0)}
          style={{
            backgroundSize: '100%',
            backgroundPosition: 'center',
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>

          {/* <img src={socreboard} style={{ width: '100%' }} alt='server' /> */}

        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <img src={soccer} style={{ width: '40%' }} alt='bash' /> */}
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}
