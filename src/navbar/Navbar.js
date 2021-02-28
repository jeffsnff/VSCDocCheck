import React from 'react'
import { Link } from 'react-router-dom'
import image from './shield_vsc.png'

import {MDBNavbar, MDBNavbarBrand} from 'mdbreact'


function Navbar(){

  return(
    <MDBNavbar>
      <MDBNavbarBrand>
        <Link to='/'><img src={image} style={{height: '50px'}}/><strong style={{fontSize: '30px', paddingLeft: '10px', color: 'green'}}>VSC Document Check</strong></Link>
      </MDBNavbarBrand>
      {/* <Link to='/' style={{fontSize: '30px'}}>Document Check</Link> */}
      <Link to='/contact' style={{fontSize: '30px', color: 'green'}}>Contact Support</Link>
    </MDBNavbar>
  )
}

export default Navbar;