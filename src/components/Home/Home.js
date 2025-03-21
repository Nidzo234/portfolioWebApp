import React from 'react'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import "./home.css"
export default function Home() {
  return (
    <div className='container mt-5'>
        <div className='row py-5'>

            <div className='col-lg-6 col-sm-12 order-1 order-lg-2 text-center'>
              <Image className='w-100' src="/images/HomePageImage.jpg" />
            </div>

            <div className='col-lg-6 col-sm-12 d-flex align-items-center order-2 order-lg-1'>
                <div className='my-auto'>
                <h1 className="display-4 font-weight-bold">Hello, I'm Nikola</h1>
                <p className="lead text-muted">I'm a passionate software developer, creating amazing digital experiences. I specialize in building modern web and mobile applications with a focus on clean code and performance.</p>
                <Button variant="dark" href="#contact" className="mt-3">Get In Touch</Button>
                </div>
            </div>
  
        </div>
    </div>
  )
}
