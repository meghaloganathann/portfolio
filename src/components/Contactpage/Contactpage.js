import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'

function Contactpage() {
  return (
    <div className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Get In Touch</h2>
        <p className='contactpara'> <b>I’m currently searching for opportunities for student-developer intern role.</b> <br /> If there is any vacancy my inbox is always open. Whether <br /> you have any further questions or just want to say hi, <br /> I’ll try my best to get back to you!</p>
        <button
          className='contactbtn'
          onClick={() => {
            window.open("https://wa.me/+918778742590");
          }}
        >Contact</button>
        <span></span>
        <hr className='line' />
        <p className='copyright'>Copyright 2023.
        <br /> 
        Designed & Built by <span>Megha SL</span></p>
      </Container>
    </div>
  )
}

export default Contactpage