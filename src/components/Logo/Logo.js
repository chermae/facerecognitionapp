import React from 'react'
import Tilt from 'react-tilt'
import brain from './brain.png'
import './Logo.css'

const Logo = () =>{
        return (
            <div className='ma4 mt0'>
                <Tilt className="Tilt b2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                    <div className="Tilt-inner p3">
                    <img style={{padding: '25px'}} src={brain} alt='logo' />
                    </div>
                </Tilt>
            </div>
        )
    }

export default Logo