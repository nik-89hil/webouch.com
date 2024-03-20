import React from 'react'
import img1 from '../assets/5121178.jpg'
import img2 from '../assets/5126131.jpg'
import img3 from '../assets/6308481.jpg'


const About = () => {
  return (
    <div className='about'>
        <h1>About us</h1>
        <br />
        <p className="abpara">
        Welcome to our website provider platform, where we empower businesses to thrive in the digital landscape with stunning, user-friendly websites. We understand the importance of a strong online presence in today's competitive market, and our mission is to make website creation effortless and effective for every entrepreneur and business owner. With our intuitive drag-and-drop website builder, you can bring your vision to life with ease, whether you're a seasoned professional or just starting out. Our customizable templates, powerful features, and responsive designs ensure that your website not only looks great but also performs seamlessly across devices. Plus, our dedicated support team is here to assist you every step of the way, ensuring that you have the tools and resources you need to succeed online. Ready to take your business to new heights? Let's build something amazing together.

        <br />
        <br />
        So whether you're looking to launch your first website or revamp your existing online presence, our website provider platform has everything you need to succeed. Join us today and discover the endless possibilities of the digital world. Let's build something extraordinary together!
        </p>

        <br />
        <h1>Just looking like a woooooowww...</h1>

        <div className="show">
            <p className="heading">Customize page.</p>
            <img src={img1} alt="img1" />
            <br />
            <p className="heading">your color combinations.</p>
            <img src={img2} alt="img2" />
            <br />
            <p className="heading">add your pitures and gallery.</p>
            <img src={img3} alt="img3" />
        </div>
      
    </div>
  )
}

export default About
